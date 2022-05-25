import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private router: Router, private fb: FormBuilder) {}

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
    // console.log(this.form.value);
    this.router.navigate(['/login']);
  }
}
