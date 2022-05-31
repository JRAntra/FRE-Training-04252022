// Kiki's version
import { User, dummyUser } from '../shared/models/User';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../core/services/authentication/authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit, ReactiveFormsModule {
  // export class AppModule {}
  user: any | undefined; // User = dummyUser;

  // loading = false;
  submitted = false;
  loading = false;

  public form: FormGroup = this.formBuilder.group({
    useremail: [
      '',
      [Validators.required, Validators.minLength(3), Validators.minLength(50)],
    ],
    password: [
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.minLength(1024),
      ],
    ],
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authentication: AuthenticationService // private alertService: AlertService
  ) {}

  //dependency injection
  ngOnInit(): void {
    console.log('init');
  }

  onLogin() {
    this.submitted = true;
    const email = this.form.value.username;
    const pswd = this.form.value.password;

    console.log(this.form.value);

    // error to if invalid
    if (!this.form.invalid) {
      alert('Invalid userEmail or password');
    }

    this.authentication.getUser(email, pswd).subscribe({
      next: (response: any) => {
        if (response) {
          console.log(response);
          this.user = response;
          this.router.navigate(['feed']);
          // this.router.navigate(['feed/:${this.user._id}`']);
        }
      },
      error: () => {
        // this.loading = false;
        alert('Request for userEmail check failed with error.');
      },
    });
  }

  onRegister() {
    this.router.navigate(['register']);
  }
}
