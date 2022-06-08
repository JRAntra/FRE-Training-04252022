import { Component, OnInit, OnDestroy} from '@angular/core';

import { News_ } from '../shared/models/News';
import { StoriesService } from './stories-service/stories.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.sass']
})
export class FeedComponent implements OnInit, OnDestroy{

  newsList: News_[] = [];
  subscriptions$: any[] = [];

  constructor( private storiesService: StoriesService ) { }

  // Method to subscribe to newsList$ subject, store it in newsList, and render
  subscribeNewsList(): void {
    const subscription$ = this.storiesService.newsList$
      .subscribe(
        (response: any) => {
          this.newsList = response;
          console.log('subscribed to: ', this.newsList)
        },
        (error: Error) => console.error('subscribeNewsList() fails with: ', error),
        () => console.log('subscribeNewsList() completed')
      );
    this.subscriptions$.push(subscription$);
  }

  // things to do on initializing the component
  ngOnInit(): void {
    // fetch newsList from backend
    this.storiesService.fetchNewsList();
    // subscribe to newsList$ and automatically update DOM when subject got updated
    this.subscribeNewsList();
  }

  // things to do on destroying the component
  ngOnDestroy(): void {
    // unsubscribe subscriptions to release memory and avoid memory leak
    this.subscriptions$.forEach((subscription$) => subscription$.unsubscribe());
  }

}
