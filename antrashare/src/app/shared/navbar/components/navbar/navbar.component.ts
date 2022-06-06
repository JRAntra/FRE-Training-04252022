import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { News } from 'src/app/features/newsFeed/components/news-feed/news-feed.component';
import { NewsfeedService } from 'src/app/features/newsFeed/newsfeed.service';

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
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private newsfeedService: NewsfeedService
  ) {
    location.onUrlChange((val) => {
      this.likeListBtn =
        val === '/newsfeed' || val === '/settings' || val === '/profile';
    });
  }

  triggerLikeList() {
    this.showLikeList = !this.showLikeList;
  }

  ngOnInit(): void {
    this.newsfeedService.likeList$.subscribe((val) => {
      this.likeList.push(val);
    });
  }
}
