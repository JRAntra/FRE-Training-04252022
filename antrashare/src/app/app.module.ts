import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { NewsFeedModule } from './newsFeed/news-feed.module';
import { ProfileModule } from './profile/profile.module';
import { RegisterModule } from './register/register.module';
import { SettingsModule } from './settings/settings.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    RegisterModule,
    NewsFeedModule,
    ProfileModule,
    SettingsModule,
    AdminModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
