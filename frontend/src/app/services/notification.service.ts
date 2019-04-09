import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {AppNotification, NotificationType} from '../models/notification.model';

@Injectable()
export class NotificationService {
  private notificationEmitter: Subject<AppNotification> = new Subject<AppNotification>();
  private closeAllEmitter: Subject<string> = new Subject<string>();

  getNotificationEmitter() {
    return this.notificationEmitter;
  }

  getCloseAllEmitter() {
    return this.closeAllEmitter;
  }

  info(content: string, group: string = '') {
    return this.set({ content, type: NotificationType.INFO, group });
  }

  error(content: string, group: string = '') {
    return this.set({ content, type: NotificationType.ERROR, group });
  }

  set(notification: AppNotification) {
    this.notificationEmitter.next(notification);
    return notification;
  }

  close(group: string = '') {
    this.closeAllEmitter.next(group);
  }

}
