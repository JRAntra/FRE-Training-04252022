import { Component, Input, OnInit } from '@angular/core';
import { storyModel } from '../news-feed.component';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.sass'],
})
export class PostListComponent implements OnInit {
  @Input() storyList?: storyModel[];
  avatarUrl = '../assets/bro-logo.png';

  constructor() {}

  ngOnInit(): void {}
}
