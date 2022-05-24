import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './components/admin/admin.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [AdminComponent, UserListComponent, UserDetailsComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule, AdminRoutingModule],
  exports: [],
})
export class AdminModule {}
