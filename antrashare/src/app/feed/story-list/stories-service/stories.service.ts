import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

import { News, News_, dummyNews, newsList } from '../../../shared/models/News';

@Injectable({
  providedIn: 'root'
})
export class StoriesService {
  baseURL: string = 'http://localhost:3000/';

  newsList$ = new BehaviorSubject([dummyNews])

  constructor(private http: HttpClient) { }

  // Method to grab an array of stories from backend. Returns Observable
  getNews(): Observable<News[]> {
    const headers = { 'content-type': 'application/json' };
    return this.http.get<News[]>(this.baseURL + 'api/news', { headers });
  }

  // Method to get data from backend, and next the newsList$ subject to emit data to subscriber
  fetchNewsList(keyword: string = '') {
    return this.http
      .get<News_[]>(`${this.baseURL}/api/news`)
      .subscribe(
        (response: any) => {
          // call helper to filter out bad data. - this is temporary -
          const data = helper(response);

          if (!keyword || !keyword.length) {
            this.newsList$.next(data);
          } else {
            const filteredData = this.filterNewsList(data, keyword);
            this.newsList$.next(filteredData);
          }
        },
        (error: Error) => console.error('fetchNewsList() fails with: ', error),
        () => console.log('fetchNewsList() completed')
      );
  }

  // Method to filter newsList based publisherName and content, in reference to user's input
  filterNewsList(list: any, keyword: string = ''): any {
    const result: News_[] = [];
    for (let i = 0; i < list.length; i++) {
      let doc = list[i];
      if (doc.publisherName.toLowerCase().includes(keyword.toLowerCase()) ||
      doc.content.text.toLowerCase().includes(keyword.toLowerCase())) {
        result.push(doc);
      }
    }
    return result;
  }

  // Method to insert a new data to backend, and next the newsList$ subject to emit data to subscriber
  postNews(doc: News, newsList: News_[]) {
    return this.http
      .post<News_[]>(`${this.baseURL}/api/news`, doc)
      .subscribe(
        (response: any) => this.newsList$.next([...newsList, response]),
        (error: Error) => console.error('postNews() fails with: ', error),
        () => console.log('postNews() completed')
      );
  }

}

// temporary helper function to filter bad data that had been inserted in backend
// // e.g. data that has no content or no publisherName
function helper(list: any) {
  const result = [];
  for (let i = 0; i < list.length; i++) {
    let doc = list[i];
    if (
      (doc.publisherName && doc.publisherName !== '') &&
      (doc.content && (doc.content.text || doc.content.image))
    ) result.push(doc);
  }
  return result
}
