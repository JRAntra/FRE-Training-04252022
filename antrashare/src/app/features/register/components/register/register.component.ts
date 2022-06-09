import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder,
  AsyncValidatorFn,
  AbstractControl,
  ValidationErrors,
  AsyncValidator,
  ValidatorFn,
} from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup = this.fb.group({
    email: new FormControl(null, [Validators.email]),
    username: new FormControl(null, [
      Validators.required,
      forbiddenNameValidator(),
      startWithUpperCase(),
    ]),
    password: new FormControl(null, [Validators.required]),
    passwordConfirmation: new FormControl(null, [Validators.required]),
  });

  hide = true;

  constructor(
    private router: Router,
    private registerService: RegisterService,
    private fb: FormBuilder
  ) {}

  getErrorMessage() {
    if (this.form.invalid) return 'You must enter a corret value';
    if (this.form.value['password'] !== this.form.value['passwordConfirmation'])
      return '  Password does NOT match';
    return;
  }

  ngOnInit(): void {
    console.log('Reactive form: ', this.form);
  }

  onSubmit() {
    console.log('check valid form: ', this.form);
    const user: User = {
      userName: this.form.value['username'],
      userEmail: this.form.value['email'],
      password: this.form.value['password'],
    };
    console.log('test register button', user);
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

export function startWithUpperCase(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value !== 3) {
      return { startwithuppercase: true };
    } else {
      return { startwithuppercase: true };
    }
  };
}
export function forbiddenNameValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = control.value;
    return forbidden ? { forbiddenName: { value: control.value } } : null;
  };
}
