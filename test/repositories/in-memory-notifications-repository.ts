import { NotificationsRepository } from '@application/repositories/notification-repositories';
import { Notification } from '@application/entities/notification';

export class InMemoryNofiticationsRepository
  implements NotificationsRepository
{
  public notifications: Notification[] = [];
  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}
