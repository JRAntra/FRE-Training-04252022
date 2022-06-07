import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass'],
})
export class ProfileComponent implements OnInit {
  hide = true;

  form: FormGroup = this.fb.group({
    email: new FormControl({ value: 'ShibaInu@gmail.com', disabled: true }, [
      Validators.required,
    ]),
    username: new FormControl({ value: 'Shiba Inu', disabled: true }, [
      Validators.required,
    ]),
    password: new FormControl({ value: '123', disabled: true }, [
      Validators.required,
    ]),
    age: new FormControl({ value: '23', disabled: true }, [
      Validators.required,
    ]),
    gender: new FormControl({ value: 'male', disabled: true }, [
      Validators.required,
    ]),
  });

  constructor(private fb: FormBuilder) {}

  getErrorMessage() {
    if (this.form.invalid) return 'You must enter a corret value';
    if (this.form.value['password'] !== this.form.value['passwordConfirmation'])
      return '  Password does NOT match';
    return;
  }

  ngOnInit(): void {
    console.log('Reactive form: ', this.form);
  }

  onEdit() {
    this.form.controls['username'].enable();
    this.form.controls['email'].enable();
    this.form.controls['password'].enable();
    this.form.controls['age'].enable();
    this.form.controls['gender'].enable();
  }
}
