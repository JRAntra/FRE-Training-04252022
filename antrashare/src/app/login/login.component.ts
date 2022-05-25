import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onLogin_feed() {
    this.router.navigate(['feed']);
  }

  onLogin_register() {
    this.router.navigate(['register']);
  }
}
