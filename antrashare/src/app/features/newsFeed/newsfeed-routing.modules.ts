import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';

const routes: Routes = [
  { path: 'newsfeed', component: NewsFeedComponent, canActivate: [AuthGuard] },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsfeedRoutingModule {}
