import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { AdminComponent } from '../admin/admin.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), ReactiveFormsModule],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
