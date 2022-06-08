import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/User';
import { LoginService } from '../login/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  constructor(private service: LoginService, private router: Router) {}
  error = '';
  ngOnInit(): void {}

  unamePattern = '^(?=.{5,})(?=.*[A-Z])(?=.*[@#$%^&+=]).*$';

  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(12),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.pattern(this.unamePattern),
    ]),
  });

  // loginForm = new FormGroup({
  //   email: new FormControl(''),
  //   password: new FormControl(''),
  // })

  submit() {
    let valid: number = 1;

    if (this.loginForm.invalid) {
      valid = 0;
      this.error = 'The Email or Password is not valid';
    }

    if (valid) {
      const newUser = {
        userEmail: this.loginForm.value.email,
        password: this.loginForm.value.password,
      };

      this.service.checkExist().subscribe((data) => {
        for (let i = 0; i < data.length; i++) {
          if (data[i].userEmail === this.loginForm.value.useremail) {
            break;
          }
          valid = 0;
          this.error = 'Email is not exist';
        }
      });

      this.service.loginAccount(newUser).subscribe((data) => {
        this.router.navigate(['feed']);
      });
    }
  }
}
