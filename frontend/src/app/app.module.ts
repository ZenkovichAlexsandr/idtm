import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderModule} from './components/header/header.module';
import {ServicesModule} from './services/services.module';
import {SpinnerModule} from './components/spinner/spinner.module';
import {NotificationModule} from './components/notification/notification.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    ServicesModule,
    SpinnerModule,
    NotificationModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
