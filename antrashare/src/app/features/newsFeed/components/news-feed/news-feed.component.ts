import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.sass'],
})
export class NewsFeedComponent implements OnInit {
  showLikeList = false;

  constructor() {}
  triggerLikeList() {
    this.showLikeList = !this.showLikeList;
    console.log(this.showLikeList);
  }

  ngOnInit(): void {}
}
