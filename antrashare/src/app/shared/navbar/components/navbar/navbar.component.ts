import { LoginService } from './../../../../features/login/login.service';
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
  logoutBtn?: boolean;
  likeList: News[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private newsfeedService: NewsfeedService,
    private loginService: LoginService
  ) {
    location.onUrlChange((val) => {
      this.likeListBtn =
        val === '/newsfeed' || val === '/settings' || val === '/profile';
      this.logoutBtn =
        val === '/newsfeed' ||
        val === '/settings' ||
        val === '/profile' ||
        val === '/admin';
    });
  }

  triggerLikeList() {
    this.showLikeList = !this.showLikeList;
  }

  ngOnInit(): void {
    this.newsfeedService.likeList$.subscribe((val) => {
      this.likeList.push(val);
    });
    this.newsfeedService.deleteLike$.subscribe((val) => {
      this.likeList = this.likeList.filter((item) => item._id !== val._id);
    });
  }

  logout() {
    this.loginService.logoutUser();
    this.router.navigate(['login']);
  }
}
