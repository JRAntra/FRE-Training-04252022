// ANGULAR MODULES
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// LOCAL MODULES
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { SettingModule } from './setting/setting.module';
import { ProfileModule } from './profile/profile.module';
import { AdminModule } from './admin/admin.module';
import { FeedModule } from './feed/feed.module';

// COMPONENTS
import { NavigationComponent } from './shared/navigation/navigation.component';
import { AppComponent } from './app.component';
import { ErrorComponent } from './shared/error/error.component';

// SERVICES
import { StoriesService } from './feed/story-list/stories-service/stories.service';
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
    HttpClientModule
  ],
  providers: [StoriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
