import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../../login.service';

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
  retUrl: string | null = 'newsfeed';
  errorMessage?: string;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private loginService: LoginService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group(this.formElements);
    console.log(this.form);

    this.activatedRoute.queryParamMap.subscribe((params) => {
      this.retUrl = params.get('retUrl');
      console.log('LoginComponent/ngOnInit ' + this.retUrl);
    });
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
          console.log(res);

          //if login successful, navigate to newsfeed
          if (res.userName) {
            localStorage.setItem(
              'userInfo_userName',
              JSON.stringify(res.userName)
            );

            this.router.navigate(['newsfeed']);
          }
        });
    }
    this.form.reset();
  }
}
