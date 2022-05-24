import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NewsFeedFormComponent } from './components/news-feed-form/news-feed-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PostListComponent } from './components/post-list/post-list.component';
import { MatInputModule } from '@angular/material/input';
import { LikeListComponent } from './components/like-list/like-list.component';
import { BottomNavComponent } from './components/bottom-nav/bottom-nav.component';
import { AppRoutingModule } from '../app-routing.module';
import { CommentComponent } from './components/comment/comment.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NewsFeedComponent,
    NavbarComponent,
    NewsFeedFormComponent,
    PostListComponent,
    LikeListComponent,
    BottomNavComponent,
    CommentComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [],
})
export class NewsFeedModule {}
