// ANGULAR MODULES
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// LOCAL MODULES
import { AppRoutingModule } from './app-routing.module';

// COMPONENTS
import { NavigationComponent } from './shared/navigation/navigation.component';
import { AppComponent } from './app.component';
import { ErrorComponent } from './shared/error/error.component';

// SERVICES
import { StoriesService } from './feed/stories-service/stories.service';
import { CanActivateGuardService } from './services/guards/can-activate-guard/can-activate-guard.service';
import { CanLoadGuardService } from './services/guards/can-load-guard/can-load-guard.service';
import { LocalStorageService } from './services/local-storage/local-storage.service';
@NgModule({
  declarations: [
    NavigationComponent,
    AppComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    StoriesService
    , CanActivateGuardService
    , CanLoadGuardService
    , LocalStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
