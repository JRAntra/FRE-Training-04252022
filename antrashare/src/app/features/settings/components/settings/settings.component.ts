import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.sass'],
})
export class SettingsComponent implements OnInit {
  options: FormGroup;

  constructor(private router: Router, fb: FormBuilder) {
    this.options = fb.group({
      color: 'primary',
      fontSize: [16, Validators.min(10)],
    });
  }
  getFontSize() {
    return Math.max(10, this.options.value.fontSize);
  }

  onSubmit() {
    console.log(this.options.value);
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {}
}
