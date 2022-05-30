import { Component, Input, OnInit } from '@angular/core';
import { News } from '../news-feed.component';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.sass'],
})
export class PostListComponent implements OnInit {
  @Input() storyList?: News[];

  avatarUrl = '../assets/bro-logo.png';

  constructor() {}

  ngOnInit(): void {
    console.log('feed list init');
  }
}
