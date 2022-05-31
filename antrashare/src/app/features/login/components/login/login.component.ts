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
    userEmail: [null, Validators.required],
    password: [null, Validators.required],
    agreement: false,
  });
  imageUrl = '../assets/BroCode.jpeg';

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.loginService
      .loginUser({
        userEmail: this.form.value.userEmail,
        password: this.form.value.password,
      })
      .subscribe((res) => {
        console.log(res);
        localStorage.setItem('userInfo', JSON.stringify(res));
      });

    this.router.navigate(['newsfeed']);
  }
}
