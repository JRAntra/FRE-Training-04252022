import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginModule } from './login/login.module';
import { ErrorComponent } from './shared/error/error.component';
// import { HomeComponent } from '.home/home.component';

const routes: Routes = [
  // { path: '', component: LoginModule }, //don't know why iss not working
  { path: '**', redirectTo: 'login'}
  // { path: '/text/:id', redirectTo:'', pathMatch:'prefix' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
