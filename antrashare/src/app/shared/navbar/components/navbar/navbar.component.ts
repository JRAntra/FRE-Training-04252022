import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
})
export class NavbarComponent implements OnInit {
  showLikeList = false;
  likeListBtn?: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {
    location.onUrlChange((val) => {
      console.log(val);
      this.likeListBtn = val === '/newsfeed';
    });
  }

  triggerLikeList() {
    this.showLikeList = !this.showLikeList;
  }

  ngOnInit(): void {}
}
