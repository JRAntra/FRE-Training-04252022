import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from '../../shared/models/News';
import { StoriesService } from './stories-service/stories.service';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.sass']
})

export class StoryListComponent implements OnInit, OnDestroy {

  newsList: News[] = [];
  subscriptions: any[] = [];

  constructor( private storiesService: StoriesService ) { }

  // method grabbing stories from backend
  displayStories() {
    this.subscriptions.push(
      this.storiesService.getNews().subscribe(
        (response: News[]) => {
          this.newsList = response;
          console.log('Response received: ', response, 'this.newsList: ', this.newsList);
        },
        (error: any) => console.log('Request failed with error: ', error),
        // () => console.log('Request for newsList completed.')
      )
    )
  }

  // things to do on initializing the component
  ngOnInit(): void {
    // grab newsList from the backend to display on DOM
    this.displayStories();
  }

  // things to do on destroying the component
  ngOnDestroy(): void {
    // unsubscribe subscriptions to release memory and avoid memory leak
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
