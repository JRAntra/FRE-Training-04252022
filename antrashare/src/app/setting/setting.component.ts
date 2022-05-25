import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.sass'],
})
export class SettingComponent {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSetting() {
    this.router.navigate(['login']);
  }
}
