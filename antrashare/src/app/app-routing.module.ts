import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { FeedComponent } from './feed/feed.component';
import { LoginComponent } from './login/login.component';
import { LoginModule } from './login/login.module';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { SettingComponent } from './setting/setting.component';
import { ErrorComponent } from './shared/error/error.component';

const routes: Routes = [
  // { path: '', component: LoginModule }, //don't know why iss not working
  // { path: '/text/:id', redirectTo:'', pathMatch:'prefix' }

  {
    path: 'feed',
    component: FeedComponent,
    loadChildren: () => import('src/app/feed/feed.module').then((m) => m.FeedModule)
  },
  {
    path: 'profile',
    component: ProfileComponent,
    loadChildren: () => import('src/app/profile/profile.module').then((m) => m.ProfileModule)
  },
  {
    path: 'admin',
    component: AdminComponent,
    loadChildren: () => import('src/app/admin/admin.module').then((m) => m.AdminModule)
  },
  {
    path: 'login',
    component: LoginComponent,
    loadChildren: () => import('src/app/login/login.module').then((m) => m.LoginModule)
  },
  {
    path: 'setting',
    component: SettingComponent,
    loadChildren: () => import('src/app/setting/setting.module').then((m) => m.SettingModule)
  },
  {
    path: 'register',
    component: RegisterComponent,
    loadChildren: () => import('src/app/register/register.module').then((m) => m.RegisterModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
