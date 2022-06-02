import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RegisterService } from '../register/service/register.service';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  error = "";
  constructor(private service: RegisterService, private router: Router) {
    
  }

  ngOnInit(): void {
  }

  registerForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    cPassword: new FormControl('')
  })

  submit() {

    let valid: number = 1;

    if (this.registerForm.value.username == "" ||
      this.registerForm.value.password == "" ||
      this.registerForm.value.cPassword == "" ||
      this.registerForm.value.email == ""
    ) {
      valid = 0;
      this.error = 'Make sure to fill up all the things';
    }

    if (this.registerForm.value.username.length < 6) {
      valid = 0;
      this.error = 'Username cannot less than 6 character or number';
    }
    if (this.registerForm.value.password.length < 6) {
      valid = 0;
      this.error = 'Password cannot less than 6 character or number';
    }
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

