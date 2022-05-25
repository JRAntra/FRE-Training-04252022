import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.sass'],
})
export class NewsFeedComponent implements OnInit {
  showLikeList = false;
  public storyList: StoryContent[] = [
    { content: 'first post', storyId: 1 },
    { content: 'second post', storyId: 2 },
    { content: 'third post', storyId: 3 },
  ];
  constructor() {}

  ngOnInit(): void {}
}
export interface StoryContent {
  content: string;
  storyId: number;
}
