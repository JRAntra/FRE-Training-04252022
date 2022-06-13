import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SettingComponent } from './setting/setting.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { FeedComponent } from './feed/feed.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { ErrorComponent } from './shared/error/error.component';

import { CanActivateGuardService } from 'src/app/services/guards/can-activate-guard/can-activate-guard.service';
import { CanLoadGuardService } from 'src/app/services/guards/can-load-guard/can-load-guard.service';

const routes: Routes = [
  {
    path: 'feed',
    component: FeedComponent,
    // children: [ ]  // refactored into lazy loading
    loadChildren: () => import('./feed/feed.module').then((m) => m.FeedModule),
    canActivate: [ CanActivateGuardService ]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    loadChildren: () => import('./profile/profile.module').then((m) => m.ProfileModule),
    canActivate: [ CanActivateGuardService ]
  },
  {
    path: 'admin',
    component: AdminComponent,
    loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule),
    canLoad: [ CanLoadGuardService ]
  },
  {
    path: 'setting',
    component: SettingComponent,
    loadChildren: () => import('./setting/setting.module').then((m) => m.SettingModule),
    canActivate: [ CanActivateGuardService ]
  },
  {
    path: 'login',
    component: LoginComponent,
    loadChildren: () => import('./login/login.module').then((m) => m.LoginModule)
  },
  {
    path: 'register',
    component: RegisterComponent,
    loadChildren: () => import('./register/register.module').then((m) => m.RegisterModule)
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'logins', redirectTo: 'login' }, // default pathMatch options: full
  { path: 'logn', redirectTo: 'login', pathMatch: 'full' }, // if full 'logn', will redirect
  { path: 'registers', redirectTo: 'register', pathMatch: 'prefix' }, // research...

  // { path: '', component: LoginComponent },

  // wild card for page not found
  { path: '**', component: ErrorComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
