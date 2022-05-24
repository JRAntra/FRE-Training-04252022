import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { FeedComponent } from './feed/feed.component';
import { AdminComponent } from './admin/admin.component';
import { SettingComponent } from './setting/setting.component';
import { StoryComponent } from './feed/story-list/story/story.component';
import { PostComponent } from './feed/post/post.component';
import { CommentComponent } from './feed/story-list/story/comment/comment.component';
import { StoryListComponent } from './feed/story-list/story-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    FeedComponent,
    AdminComponent,
    SettingComponent,
    StoryComponent,
    PostComponent,
    CommentComponent,
    StoryListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    RegisterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
