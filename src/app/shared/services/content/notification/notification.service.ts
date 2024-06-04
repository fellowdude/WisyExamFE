import { Injectable } from '@angular/core';
import { TNotification } from '../../../types/notification.type';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  notifications: TNotification[] = [];

	show(notification: TNotification) {
		this.notifications.push(notification);
	}

	remove(notification: TNotification) {
		this.notifications = this.notifications.filter((t) => t !== notification);
	}

	clear() {
		this.notifications.splice(0, this.notifications.length);
	}
}
