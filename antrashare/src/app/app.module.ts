import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RegisterModule } from './register/register.module';
import { SettingsModule } from './settings/settings.module';
import { LoginModule } from './login/login.module';
import { NewsFeedModule } from './newsFeed/news-feed.module';
import { AdminModule } from './admin/admin.module';

import { ProfileModule } from './profile/profile.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    RegisterModule,
    SettingsModule,

    LoginModule,
    NewsFeedModule,
    AdminModule,

    ProfileModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
