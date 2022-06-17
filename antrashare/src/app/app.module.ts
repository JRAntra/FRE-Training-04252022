import { CommentComponent } from './features/newsFeed/components/news-feed/post-list/comment/comment.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { RegisterModule } from './features/register/register.module';
import { SettingsModule } from './features/settings/settings.module';
import { LoginModule } from './features/login/login.module';
import { NewsFeedModule } from './features/newsFeed/news-feed.module';
import { AdminModule } from './features/admin/admin.module';
import { ProfileModule } from './features/profile/profile.module';
import { AppRoutingModule } from './app-routing.module';
import { NavbarModule } from './shared/navbar/navbar.module';
import { HttpClientModule } from '@angular/common/http';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@NgModule({
  declarations: [AppComponent],
  imports: [
    LoginModule,
    RegisterModule,
    SettingsModule,
    NewsFeedModule,
    AdminModule,
    ProfileModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NavbarModule,
    HttpClientModule,
    MatDialogModule,
  ],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} },
  ],
  bootstrap: [AppComponent],
  entryComponents: [CommentComponent],
})
export class AppModule {}
