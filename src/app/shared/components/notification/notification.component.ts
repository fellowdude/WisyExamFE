import { NgTemplateOutlet } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { NotificationService } from '../../services/content/notification/notification.service';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [NgbToastModule, NgTemplateOutlet],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss'
})
export class NotificationComponent {
  notificationService = inject(NotificationService);
}
