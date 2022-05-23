import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
})
export class NavbarComponent implements OnInit {
  showLikeList = false;

  constructor() {}
  triggerLikeList() {
    this.showLikeList = !this.showLikeList;
    console.log(this.showLikeList);
  }

  ngOnInit(): void {}
}
