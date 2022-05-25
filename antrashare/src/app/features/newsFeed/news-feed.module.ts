import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NewsFeedFormComponent } from './components/news-feed/news-feed-form/news-feed-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PostListComponent } from './components/news-feed/post-list/post-list.component';
import { MatInputModule } from '@angular/material/input';
import { CommentComponent } from './components/news-feed/post-list/comment/comment.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NewsfeedRoutingModule } from './newsfeed-routing.modules';

@NgModule({
  declarations: [
    NewsFeedComponent,
    NewsFeedFormComponent,
    PostListComponent,
    CommentComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    NewsfeedRoutingModule,
  ],
  exports: [],
})
export class NewsFeedModule {}
