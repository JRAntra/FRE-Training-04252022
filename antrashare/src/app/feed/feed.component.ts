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

  // method grabbing stories from backend
  displayStories() {
    this.subscriptions.push(
      this.storiesService.getStories().subscribe(
        (response: News[]) => {
          this.stories = response;
          console.log('Response received: ', response, 'this.stories: ', this.stories);
        },
        (error: any) => {
          console.log('Request failed with error.');
        },
        () => {
          console.log('Request for stories completed.');
        }
      )
    )
  };

  ngOnInit(): void {
    this.displayStories();
  };

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

}
