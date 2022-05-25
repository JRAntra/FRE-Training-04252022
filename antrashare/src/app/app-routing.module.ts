import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotfoundPageComponent } from './Shared/notfound-page/notfound-page.component';

// import { HomeComponent } from '.home/home.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
