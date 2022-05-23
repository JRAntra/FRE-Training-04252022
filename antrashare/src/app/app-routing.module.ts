import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/components/admin/admin.component';
import { LoginComponent } from './login/components/login/login.component';
import { CommentComponent } from './newsFeed/components/comment/comment.component';
import { NewsFeedComponent } from './newsFeed/components/news-feed/news-feed.component';
import { ProfileComponent } from './profile/components/profile/profile.component';
import { RegisterComponent } from './register/components/register/register.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
  {
    path: 'newsfeed',
    component: NewsFeedComponent,
  },
  { path: 'profile', component: ProfileComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'comments', component: CommentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
