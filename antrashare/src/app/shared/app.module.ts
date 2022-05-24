import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterModule } from '../features/register/register.module';
import { SettingsModule } from '../features/settings/settings.module';
import { LoginModule } from '../features/login/login.module';
import { NewsFeedModule } from '../features/newsFeed/news-feed.module';
import { AdminModule } from '../features/admin/admin.module';
import { ProfileModule } from '../features/profile/profile.module';
import { NavbarModule } from './navbar/navbar.module';

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
    NavbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
