import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/interfaces/interface';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass'],
})
export class AdminComponent implements OnInit {
  userlist?: User[];

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.adminService.getAllUsers().subscribe((users) => {
      console.log(users);
      this.userlist = users;
    });
  }
}
