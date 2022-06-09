import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, ValidatorFn, Validators, ValidationErrors } from '@angular/forms';
import { RegisterService } from '../register/service/register.service';
import { Router } from '@angular/router';
import { User, dummyUser } from 'src/app/shared/models/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  constructor(private service: RegisterService, private router: Router) {

  }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      username: new FormControl(
        '',
        [Validators.required,
        Validators.minLength(5),
        Validators.maxLength(12)]
      ),
      email: new FormControl('', [Validators.required, Validators.minLength(5), passwordValidator(this.regexFilter1)]),
      password: new FormControl('', [Validators.required,Validators.minLength(5), passwordValidator(this.regexFilter)]),
      cPassword: new FormControl('', [Validators.required,Validators.minLength(5), passwordValidator(this.regexFilter)])
    })
  }

  error = "";

  errorMsg: string[] = [];
  @Input() user: User = dummyUser;
  hide: boolean = true;
  regexFilter: RegExp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-])$/
  regexFilter1: RegExp = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/

  registerForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(12)]),
    email: new FormControl('', [Validators.required, Validators.minLength(5), passwordValidator(this.regexFilter1)]),
    password: new FormControl('', [Validators.required,Validators.minLength(5), passwordValidator(this.regexFilter)]),
    cPassword: new FormControl('', [Validators.required,Validators.minLength(5), passwordValidator(this.regexFilter)])
  })

  get username() {
    return this.registerForm.get('username');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get cPassword() {
    return this.registerForm.get('cPassword');
  }

  get email() {
    return this.registerForm.get('email');
  }

  toggleShow() {
    this.hide = !this.hide;
  }

  submit() {

    let valid: number = 1;

    if (this.registerForm.value.password != this.registerForm.value.cPassword) {
      valid = 0;
      this.error = 'Ccomfirm password is not same as password';
    }

    this.service.checkDuplicate().subscribe(data => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].userName === this.registerForm.value.username) {
          valid = 0;
          this.error = 'Username is used';
          break;
        }

        if (data[i].userEmail === this.registerForm.value.useremail) {
          valid = 0;
          this.error = 'Email is used';
          break;
        }
      }
    });

    if (valid) {
      const newUser = {
        userName: this.registerForm.value.username,
        userEmail: this.registerForm.value.email,
        password: this.registerForm.value.password,
      };
      
      this.service.registerAccount(newUser).subscribe((data) => {
        // add something
        this.router.navigate(["feed"]);
      });
    }
  }
}

export function passwordValidator(filter: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const isValid = filter.test(control.value);
    const result = isValid ? { validPassword: { value: control.value } } : null;
    return result;
  }
}

export function emailValidator(filter: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const isValid = filter.test(control.value);
    const result = isValid ? { validEmail: { value: control.value } } : null;
    return result;
  }
}


/*
      addPerson() {
        this.apiService.addPerson(this.person)
          .subscribe(data => {
            console.log(data)
            this.refreshPeople();
          })
      } */
/*
 *   refreshPeople() {
    this.apiService.getPeople()
    .subscribe(data => {
        console.log(data)
        this.people=data;
    })

   }*/

