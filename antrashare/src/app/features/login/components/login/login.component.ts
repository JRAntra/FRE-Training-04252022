import { Component, OnInit } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  formElements = {
    userEmail: [null, Validators.email],
    password: [null, Validators.required],
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
    this.errorMessage = this.form.invalid
      ? 'You must enter a corret value'
      : '';
  }

  loginErrorMessage?: string;

  onSubmit() {
    if (this.form.valid) {
      this.loginService
        .loginUser({
          userEmail: this.form.value.userEmail,
          password: this.form.value.password,
        })
        .subscribe(
          (res) => {
            //check if login successfully
            if (res.userName) {
              localStorage.setItem(
                'userInfo_userName',
                JSON.stringify(res.userName)
              );
              //if login successful, navigate to newsfeed
              this.router.navigate(['newsfeed']);
            }
          },
          (error) => {
            console.log(error);
          }
        );
    }
    this.form.reset();
    this.errorMessage = '';
  }
}
