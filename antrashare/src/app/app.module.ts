import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { SettingModule } from './setting/setting.module';
import { ProfileModule } from './profile/profile.module';
import { AdminModule } from './admin/admin.module';
import { FeedModule } from './feed/feed.module';

import { AppComponent } from './app.component';
import { NotfoundPageComponent } from './Shared/notfound-page/notfound-page.component';
import { NavigtebarComponent } from './Shared/navigtebar/navigtebar.component';

@NgModule({
  declarations: [AppComponent, NotfoundPageComponent, NavigtebarComponent],
  imports: [
    BrowserModule,
    LoginModule,
    FeedModule,
    RegisterModule,
    SettingModule,
    ProfileModule,
    AdminModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
