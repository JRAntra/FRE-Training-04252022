import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../../register.service';

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

  constructor(
    private router: Router,
    private registerService: RegisterService
  ) {}

  getErrorMessage() {
    if (this.username.hasError('required')) return 'You must enter a value';
    if (this.password.hasError('required')) return 'You must enter a value';
    if (this.passwordConfirmation.hasError('required'))
      return 'You must enter a value';
    if (this.email.hasError('required')) return 'You must enter a value';
    if (this.password.value !== this.passwordConfirmation.value)
      return 'Passwords do NOT match ';
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  ngOnInit(): void {}

  onSubmit() {
    const user: User = {
      userName: this.username.value,
      userEmail: this.email.value,
      password: this.password.value,
    };
    console.log('test register button');
    this.registerService.registerUser(user).subscribe((res) => {
      if (res.userEmail) {
        console.log(res.userEmail);
        this.router.navigate(['/login']);
      }
    });
  }
}

export interface User {
  name?: string;
  userName: string;
  userEmail: string;
  password: string;

  userRole?: string;
  age?: number;
  gender?: string;
  phone?: string;
}
