import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.sass'],
})
export class NewsFeedComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  showLikeList = false;
  public storyList: storyModel[] = [
    { content: 'first post', storyId: 1 },
    { content: 'second post', storyId: 2 },
    { content: 'third post', storyId: 3 },
  ];

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log('newsfeed onchanges');
  }
  ngOnInit(): void {
    console.log('newsfeed init');
  }

  ngDoCheck(): void {
    console.log('newsfeed docheck');
  }

  ngAfterContentInit(): void {
    console.log('aftercontentinit');
  }
  ngAfterContentChecked(): void {
    console.log('after content checked');
  }
  ngAfterViewInit(): void {
    console.log('after view init');
  }
  ngAfterViewChecked(): void {
    console.log('after view checked');
  }
  ngOnDestroy(): void {
    console.log('no destroy');
  }

  onPost(event: string) {
    this.storyList.push({ content: event, storyId: this.storyList.length + 1 });
  }
}
export interface storyModel {
  content: string;
  storyId: number;
}
