import { Component, OnInit, OnDestroy } from '@angular/core';
import { News, dummyNews } from '../../shared/models/News';
import { StoriesService } from '../stories-service/stories.service';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})
export class PostComponent implements OnInit, OnDestroy {

  inputField: string = '';
  story: News = dummyNews;
  subscriptions: any[] = [];

  constructor(private storiesService: StoriesService) { }

  onAddStory(input: string): void {

    this.story = {
      publisherName: 'StephenAngularSis',
      publishedTime: new Date(),
      content: {
        video: 'videoDummy.mp4',
        text: `${input}. Todo:
        1. add some logic in method to categorize the input text into corresponding properties;
        2. get publisherName from params.id to get the right stories list to display.`,
        image: 'image.dummy.png'
      },
      comment: [],
      likedIdList: []
    }
    console.log('User input: ', input);
    console.log(`Story to send: `, this.story);

    this.subscriptions.push(
      this.storiesService.postNews(this.story).subscribe(
        (response: any) => {
          console.log('Response received!', response);
          this.story = response;
          console.log('this.story after updated with response: ', this.story);
        },
        (error: any) => {
          console.log('Request failed with an error: ', error);
        },
        () => {
          console.log('Request for posting new story completed.');
        }
      )
    )
  }

  onReset(): void { }

  ngOnInit(): void { }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe())
  }

}
