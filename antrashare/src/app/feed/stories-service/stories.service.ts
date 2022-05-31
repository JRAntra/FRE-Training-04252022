import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { News } from '../../shared/models/News';

@Injectable({
  providedIn: 'root'
})
export class StoriesService {

  constructor(private http: HttpClient) { }

  // Method to grab an array of stories from backend. Returns Observable
  getStories() {
    return this.http.get<News[]>('http://localhost:4231/api/news');
  }

  // Method to insert a new story into the backend. Returns Observable
  postNews(doc: News) {
    return this.http.post<News>('http://localhost:4231/api/news', doc);
  }
}
