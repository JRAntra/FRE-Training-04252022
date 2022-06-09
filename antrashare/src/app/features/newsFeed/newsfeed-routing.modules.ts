import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';
import { CommentComponent } from './components/news-feed/post-list/comment/comment.component';

const routes: Routes = [
  { path: '', component: NewsFeedComponent, canActivate: [AuthGuard] },
  { path: ':id', component: CommentComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsfeedRoutingModule {}
