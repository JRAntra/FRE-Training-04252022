import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
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
          //check if login successfull
          if (res.bearerToken) {
            this.loginService.isloggedIn = true;
            // store toke
            localStorage.setItem('token', JSON.stringify(res.bearerToken));
            // decode token
            let tokenInfo: any = jwtDecode(res.bearerToken);
            console.log('token: ', tokenInfo);
            // check if user is admin
            if (tokenInfo.userRole === 'admin') {
              this.loginService.isAdmin = true;
            }
            //navigate to newsfeed
            this.router.navigate(['newsfeed']);
          }
        });
    }
    this.form.reset();
  }
}
