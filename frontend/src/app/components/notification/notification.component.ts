import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {NotificationService} from '../../services/notification.service';
import {NotificationType} from '../../models/notification.model';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit, OnDestroy {
  isOpened = false;
  type: NotificationType;
  message: string;
  group: string;

  private notificationEmitter: Subscription;
  private closeAllEmitter: Subscription;
  private hideTimeout;

  constructor(private notificationService: NotificationService) {
  }

  ngOnInit() {
    this.notificationEmitter = this.notificationService.getNotificationEmitter().subscribe(message => {
      this.type = message.type;
      this.group = message.group;
      this.message = message.content;

      this.isOpened = true;

      if (!!this.hideTimeout) {
        this.removeTimeout(this.hideTimeout);
      }
      this.hideTimeout = setTimeout(() => this.onClose(), 5000);
    });

    this.closeAllEmitter = this.notificationService.getCloseAllEmitter().subscribe(group => {
      if (group === '' || this.group === group) {
        this.onClose();
      }
    });
  }

  ngOnDestroy(): void {
    if (this.notificationEmitter) {
      this.notificationEmitter.unsubscribe();
    }

    if (this.closeAllEmitter) {
      this.closeAllEmitter.unsubscribe();
    }
  }

  onClose() {
    this.isOpened = false;
    this.cleanUp();
  }

  private cleanUp() {
    this.type = undefined;
    this.message = '';

    this.removeTimeout(this.hideTimeout);
  }

  private removeTimeout(timeout: any) {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
  }
}
