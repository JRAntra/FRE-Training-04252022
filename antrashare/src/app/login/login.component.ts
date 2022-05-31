import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/User';
import { LoginService } from '../login/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  
  constructor(private service: LoginService, private router: Router) { }
  error = "";
  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })

  submit() {
    let valid: number = 1;

    if (this.loginForm.value.password == "" || this.loginForm.value.email == "") {
      valid = 0;
      this.error = 'Make sure to fill up all the things';
    }

    if (valid == 1) {
      const newUser = {
        userEmail: this.loginForm.value.email,
        password: this.loginForm.value.password
      };

      this.service.checkExist().subscribe(data => {
        for (let i = 0; i < data.length; i++) {
          if (data[i].userEmail === this.loginForm.value.useremail) {
            break;
          }
          valid = 0;
          this.error = 'Email is not exist';
        }
      });

      this.service.loginAccount(newUser).subscribe((data) => {
        this.router.navigate(["feed"]);
      });
    }
  }
}

