import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/interfaces/interface';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.sass'],
})
export class UserDetailsComponent implements OnInit {
  user?: User;

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.adminService.user$.subscribe((user) => {
      this.user = user;
    });
  }
}
