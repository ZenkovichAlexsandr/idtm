export class AppNotification {
  type: NotificationType;
  content: string;
  group: string;
}

export enum NotificationType {
  ERROR = 'error',
  INFO = 'info'
}
