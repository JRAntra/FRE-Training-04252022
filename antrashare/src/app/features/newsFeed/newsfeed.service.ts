import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from 'src/app/features/newsFeed/components/news-feed/news-feed.component';
import { baseURL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NewsfeedService {
  constructor(private http: HttpClient) {}

  getNews(): Observable<News[]> {
    return this.http.get<News[]>(baseURL + 'api/news');
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
}
