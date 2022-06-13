import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { News, News_ } from 'src/app/shared/models/News';
import { FormGroup, FormControl } from '@angular/forms';
import { StoriesService } from '../stories-service/stories.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})
export class PostComponent implements OnInit {
  @Input() newsList: News_[] = [];

  subscriptions$: any[] = [];

  constructor(private storiesService: StoriesService) { }

  inputForm = new FormGroup({
    news: new FormControl('')
  })

  submit(): void {
    const news = {
      // TODO: we should grab the publisherName from params
      publisherName: 'StephenAngularSis',
      publishedTime: new Date(),
      content: {
        // TODO: for content video, text, and image, input value should be filtered by regex
          video: 'video-placeholder.mp4',
          text: this.inputForm.value.news,
          image: 'https://wallpaperaccess.com/full/899071.jpg'
      },
      comment: [],
      likedIdList: []
    }
    // todo
    console.log(`story to send: `, news, 'current newsList: ', this.newsList);
    this.storiesService.postNews(news, this.newsList);
    this.clearField();
  }

  get news(): any {
    return this.inputForm.get('news');
  }

  clearField() {
    return this.news.reset();
  }

  ngOnInit(): void { }

  ngOnDestroy(): void {
    // when the component get's destroyed, unsubscribe all the subscriptions
    this.subscriptions$.forEach((subscription$) => subscription$.unsubscribe())
  }

}
