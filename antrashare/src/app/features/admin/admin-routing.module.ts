import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from 'src/app/shared/guards/admin.guard';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';
import { AdminComponent } from './components/admin/admin.component';

const routes: Routes = [
  { path: 'admin', component: AdminComponent, canActivate: [AdminGuard] },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
