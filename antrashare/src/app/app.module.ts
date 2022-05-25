import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './shared/app.component';
import { RegisterModule } from './features/register/register.module';
import { SettingsModule } from './features/settings/settings.module';
import { LoginModule } from './features/login/login.module';
import { NewsFeedModule } from './features/newsFeed/news-feed.module';
import { AdminModule } from './features/admin/admin.module';
import { ProfileModule } from './features/profile/profile.module';
import { AppRoutingModule } from './shared/app-routing.module';

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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
