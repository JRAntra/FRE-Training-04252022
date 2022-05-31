import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { News } from 'src/app/shared/models/News';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  baseURL: string = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }

  postNews(news: any) {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(news);
    return this.http.post(this.baseURL + 'api/news', body, {headers: headers});
  }
}


