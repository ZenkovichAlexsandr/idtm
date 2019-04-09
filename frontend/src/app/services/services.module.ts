import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {UserService} from './user.service';
import {SpinnerService} from './spinner.service';
import {NotificationService} from './notification.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    SpinnerService,
    NotificationService
  ]
})
export class ServicesModule {
}
