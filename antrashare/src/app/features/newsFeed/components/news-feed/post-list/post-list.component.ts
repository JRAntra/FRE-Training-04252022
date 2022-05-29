import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
} from '@angular/core';
import { storyModel } from '../news-feed.component';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.sass'],
})
export class PostListComponent implements OnInit, OnChanges {
  @Input() storyList?: storyModel[];
  @Input() likenumber?: string;
  avatarUrl = '../assets/bro-logo.png';

  constructor() {}

  ngOnChanges(): void {
    console.log('feed list onchanges');
  }
  ngOnInit(): void {
    console.log('feed list init');
  }

  // ngDoCheck(): void {
  //   console.log('newsfeed list docheck');
  // }

  // ngAfterContentInit(): void {
  //   console.log('list aftercontentinit');
  // }
  // ngAfterContentChecked(): void {
  //   console.log('list after content checked');
  // }
  // ngAfterViewInit(): void {
  //   console.log('list after view init');
  // }
  // ngAfterViewChecked(): void {
  //   console.log('list after view checked');
  // }
}
