import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  form: FormGroup = this.fb.group({
    userEmail: [null, Validators.email],
    password: [null, Validators.required],
    agreement: false,
  });
  imageUrl = '../assets/BroCode.jpeg';

  errorMessage?: string;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {}

  getErrorMessage() {
    if (this.form.invalid) return 'You must enter a corret value';
    return;
  }
  loginErrorMessage?: string;

  onSubmit() {
    if (this.form.valid) {
      this.loginService
        .loginUser({
          userEmail: this.form.value.userEmail,
          password: this.form.value.password,
        })
        .subscribe((res) => {
          console.log(res);
          if (res.userName) {
            console.log(res.userName);
            localStorage.setItem(
              'userInfo_userName',
              JSON.stringify(res.userName)
            );
            this.router.navigate(['newsfeed']);
          }
        });
    }
  }
}
