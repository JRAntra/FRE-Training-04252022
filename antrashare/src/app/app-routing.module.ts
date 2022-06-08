import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/login/components/login/login.component';
import { NotFoundPageComponent } from './shared/not-found-page/not-found-page.component';

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
  },
  {
    path: 'newsfeed',
    loadChildren: () =>
      import(`./features/newsFeed/news-feed.module`).then(
        (module) => module.NewsFeedModule
      ),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import(`./features/profile/profile.module`).then(
        (module) => module.ProfileModule
      ),
  },
  {
    path: 'settings',
    loadChildren: () =>
      import(`./features/settings/settings.module`).then(
        (module) => module.SettingsModule
      ),
  },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
