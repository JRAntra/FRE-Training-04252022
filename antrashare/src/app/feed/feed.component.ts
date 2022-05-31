import { Component, OnInit, OnDestroy } from '@angular/core';

import { News, dummyNews } from '../shared/models/News';
import { StoriesService } from '../feed/stories-service/stories.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.sass']
})
export class FeedComponent implements OnInit, OnDestroy {

  stories: News[] = [];
  story: News = dummyNews;

  subscriptions: any[] = [];

  constructor(private storiesService: StoriesService) { }

}
