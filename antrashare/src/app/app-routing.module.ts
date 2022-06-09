import { AdminComponent } from './features/admin/components/admin/admin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/login/components/login/login.component';
import { NotFoundPageComponent } from './shared/not-found-page/not-found-page.component';
import { AuthGuardService } from './core/services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'admin',
    loadChildren: () =>
      import(`./features/admin/admin.module`).then(
        (module) => module.AdminModule
      ),
    canActivate: [AuthGuardService],
  },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
