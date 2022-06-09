import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { News } from 'src/app/features/newsFeed/components/news-feed/news-feed.component';
import { baseURL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NewsfeedService {
  path = 'api/news';

  newList: News[] = [];
  story?: News;
  // likeList$ = new Subject<any>();
  // deleteLike$ = new Subject<any>();

  constructor(private http: HttpClient) {}

  getNews(): Observable<News[]> {
    return this.http.get<News[]>(baseURL + this.path);
  }

  postNews(news: News): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(news);
    return this.http.post(baseURL + 'api/news', body, {
      headers: headers,
    });
  }

  addComment(comment: any, id: any): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(comment);
    return this.http.patch(baseURL + 'api/news/addComment/' + id, body, {
      headers: headers,
    });
  }

  passStoryToComment(story: News) {
    this.story = story;
  }
  getStoryData() {
    return this.story;
  }

  // addLikeList(story: News) {
  //   this.likeList$.next(story);
  // }

  // deleteLikeList(story: News) {
  //   this.deleteLike$.next(story);
  // }
}
