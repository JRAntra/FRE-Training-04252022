import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../login.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  formElements = {
    userEmail: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(5)]],
    agreement: false,
  };
  imageUrl = '../assets/BroCode.jpeg';

  errorMessage?: string;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group(this.formElements);
  }

  onSubmit() {
    if (this.form.valid) {
      this.loginService
        .loginUser({
          userEmail: this.form.value.userEmail,
          password: this.form.value.password,
        })
        .subscribe((res) => {
          //check if login successfully
          if (res.bearerToken) {
            //put token in localstorage

            localStorage.setItem('token', res.bearerToken);

            let decoded = jwt_decode(res.bearerToken); //decode token

            //if login successful, navigate to newsfeed
            this.router.navigate(['newsfeed']);
          }
        });
    }
    // this.form.reset();
  }
}
