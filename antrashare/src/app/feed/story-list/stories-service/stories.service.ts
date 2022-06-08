import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { News } from '../../../shared/models/News';

@Injectable({
  providedIn: 'root'
})
export class StoriesService {

  baseURL: string = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  // Method to grab an array of stories from backend. Returns Observable
  getNews(): Observable<News[]> {
    const headers = { 'content-type': 'application/json' };
    return this.http.get<News[]>(this.baseURL + 'api/news', { headers });
  }
}
