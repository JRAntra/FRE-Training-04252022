import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.sass'],
})
export class FeedComponent implements OnInit {
  constructor() {}
  storyListFromParent: storyModel[] = [
    { content: 'story1', storyId: 1 },
    { content: 'story2', storyId: 2 },
    { content: 'story3', storyId: 3 },
    { content: 'story4', storyId: 4 },
    { content: 'story5', storyId: 5 },
  ];
  ngOnInit(): void {}

  onPost(event: string) {
    let temp: storyModel = {
      content: event,
      storyId: this.storyListFromParent.length + 1,
    };
    this.storyListFromParent.push(temp);
  }
}

export interface storyModel {
  content: string;
  storyId: number;
}
