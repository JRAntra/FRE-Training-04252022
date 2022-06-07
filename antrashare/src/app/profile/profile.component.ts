import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { User } from '../shared/models/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {
  errorMsg: string[] = [];
  @Input() user!: User;
  hide: boolean = true;

  constructor() { }

  inputForm = new FormGroup({
    username: new FormControl(
      '',
      [ Validators.required,
        Validators.minLength(5),
        Validators.maxLength(12) ]
    ),
    password: new FormControl(
      '',
      [ Validators.minLength(5) ]
    ),
    gender: new FormControl(''),
    age: new FormControl(''),
    phone: new FormControl('')
  })


  get username() {
    return this.inputForm.get('username');
  }

  get age() {
    return this.inputForm.get('age');
  }

  get gender() {
    return this.inputForm.get('gender');
  }

  get password() {
    return this.inputForm.get('password');
  }

  onSave() {}

  ngOnInit(): void {

    this.inputForm = new FormGroup({
      username: new FormControl(
        '',
        [ Validators.required,
          Validators.minLength(5),
          Validators.maxLength(12) ]
      ),
      password: new FormControl(
        '',
        [ Validators.required,
          Validators.minLength(5) ]
      ),
      gender: new FormControl(''),
      age: new FormControl(''),
      phone: new FormControl('')
    })
  }

}
