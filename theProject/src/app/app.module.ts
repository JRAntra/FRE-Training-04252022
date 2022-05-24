import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { SettingModule } from './setting/setting.module';
import { ProfileModule } from './profile/profile.module';

import { AppComponent } from './app.component';
import { FeedComponent } from './feed/feed.component';
import { AdminComponent } from './admin/admin.component';
import { StoryComponent } from './feed/story-list/story/story.component';
import { PostComponent } from './feed/post/post.component';
import { CommentComponent } from './feed/story-list/story/comment/comment.component';
import { StoryListComponent } from './feed/story-list/story-list.component';


@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    AdminComponent,
    StoryComponent,
    PostComponent,
    CommentComponent,
    StoryListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    RegisterModule,
    SettingModule,
    ProfileModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
