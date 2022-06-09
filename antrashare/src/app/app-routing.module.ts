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
    path: 'newsfeed',
    loadChildren: () =>
      import('./features/newsFeed/news-feed.module').then(
        (mod) => mod.NewsFeedModule
      ),
  },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
