import {
    Component
  , Input
  , OnInit
} from '@angular/core';

import {
    FormGroup
  , FormControl
  , AbstractControl
  , ValidatorFn
  , Validators
  , ValidationErrors
} from '@angular/forms';

import { User, dummyUser } from '../shared/models/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})

export class ProfileComponent implements OnInit {
  avatar: string = "https://d7hftxdivxxvm.cloudfront.net/?resize_to=fit&width=800&height=800&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2F_DogUIUeT1Ke3UvxGQbPGA%2Fnormalized.jpg"
  errorMsg: string[] = [];
  @Input() user: User = dummyUser;
  hide: boolean = true;

  // at least 1 uppercase, 1 lowercase, 1 special char
  regexFilter: RegExp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-])$/

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
      [ Validators.minLength(5),
        passwordValidator(this.regexFilter)
      ]
    ),
    gender: new FormControl(''),
    age: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl('')
  })


  get username() {
    return this.inputForm.get('username');
  }

  get password() {
    return this.inputForm.get('password');
  }

  toggleShow() {
    this.hide = !this.hide;
  }

  onSave() {
    console.log('onSave()', this.inputForm.value);
  }

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
          Validators.minLength(5),
          passwordValidator(this.regexFilter) ]
      ),
      gender: new FormControl(''),
      age: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl('')
    })
  }

}

// Directive for password characters validator starts here.
export function passwordValidator(filter: RegExp): ValidatorFn {
  console.log('passwordValidator() taking', filter)
  return (control: AbstractControl): ValidationErrors | null => {
    console.log('anonymousFn() taking', control)
    const isValid = filter.test(control.value);
    const result = isValid ? {validPassword: { value: control.value}}: null;
    console.log('compare result isValid, ', isValid, result)
    return result;
  }
}
// Directive for password characters validator starts here.

// Ref.: https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a
// at least 8 chars, 1 uppercase, 1 lowercase, 1 number, 1 special char
// /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
