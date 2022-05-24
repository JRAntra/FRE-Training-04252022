import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  form: FormGroup = this.fb.group({
    userName: [null, Validators.required],
    password: [null, Validators.required],
    agreement: false,
  });
  imageUrl = '../assets/BroCode.jpeg';

  constructor(private router: Router, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      userName: [null, Validators.required],
      password: [null, Validators.required],
      agreement: false,
    });
  }

  onSubmit() {
    console.log(this.form.value);
    this.router.navigate(['/newsfeed']);
  }
}
