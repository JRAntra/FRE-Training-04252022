import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass'],
})
export class RegisterComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  passwordConfirmation = new FormControl('', [Validators.required]);

  hide = true;

  constructor(private router: Router, private apiService: ApiService) {}

  getErrorMessage() {
    if (this.username.hasError('required')) return 'You must enter a value';
    if (this.password.hasError('required')) return 'You must enter a value';
    if (this.passwordConfirmation.hasError('required'))
      return 'You must enter a value';
    if (this.email.hasError('required')) return 'You must enter a value';

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  ngOnInit(): void {}

  onSubmit() {
    const user = {
      userName: this.username.value,
      userEmail: this.email.value,
      password: this.password.value,
    };
    this.apiService.registerUser(user).subscribe((res) => {
      console.log(res);
      localStorage.setItem('userInfo', JSON.stringify(res));
    });
    // this.router.navigate(['/login']);
  }
}
