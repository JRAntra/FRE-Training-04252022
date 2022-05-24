import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
})
export class NavbarComponent implements OnInit {
  showLikeList = false;

  constructor(private router: Router) {}
  triggerLikeList() {
    this.showLikeList = !this.showLikeList;
    console.log(this.showLikeList);
  }

  ngOnInit(): void {}
}
