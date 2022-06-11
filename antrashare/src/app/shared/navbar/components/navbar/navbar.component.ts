import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/features/newsFeed/components/news-feed/news-feed.component';

import { LikeListService } from '../../navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
})
export class NavbarComponent implements OnInit {
  showLikeList = false;
  likeListBtn?: boolean;
  likeList: News[] = [];

  constructor(
    private location: Location,
    private likeListService: LikeListService
  ) {}

  triggerLikeList() {
    this.showLikeList = !this.showLikeList;
  }

  ngOnInit(): void {
    this.location.onUrlChange((val) => {
      this.likeListBtn =
        val === '/newsfeed' || val === '/settings' || val === '/profile';
    });
    this.likeListService.likeList$.subscribe((val) => {
      this.likeList.push(val);
    });
    this.likeListService.deleteLike$.subscribe((val) => {
      this.likeList = this.likeList.filter((item) => item._id !== val._id);
    });
  }
}
