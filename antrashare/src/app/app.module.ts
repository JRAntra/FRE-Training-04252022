import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { SettingModule } from './setting/setting.module';
import { ProfileModule } from './profile/profile.module';
import { AdminModule } from './admin/admin.module';
import { FeedModule } from './feed/feed.module';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { AppComponent } from './app.component';
import { ErrorComponent } from './shared/error/error.component';

@NgModule({
  declarations: [
    NavigationComponent,
    AppComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,
    RegisterModule,
    SettingModule,
    ProfileModule,
    AdminModule,
    FeedModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
