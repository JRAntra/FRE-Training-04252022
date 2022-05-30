import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from 'src/app/features/newsFeed/components/news-feed/news-feed.component';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseURL: string = 'http://localhost:4231/';

  constructor(private http: HttpClient) {}

  registerUser(user: any): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(user);
    return this.http.post(
      this.baseURL + 'api/register/createNewAccount',
      body,
      { headers: headers }
    );
  }

  loginUser(user: any): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(user);
    return this.http.post(this.baseURL + 'api/login', body, {
      headers: headers,
    });
  }

  getNews(): Observable<News[]> {
    return this.http.get<News[]>(this.baseURL + 'api/news');
  }

  postNews(news: News): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(news);
    return this.http.post(this.baseURL + 'api/news', body, {
      headers: headers,
    });
  }

  addComment(comment: any, id: any): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(comment);
    return this.http.patch(this.baseURL + 'api/news/addComment/' + id, body, {
      headers: headers,
    });
  }
}
