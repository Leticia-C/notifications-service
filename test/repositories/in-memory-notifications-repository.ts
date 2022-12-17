import NotificationRepository from 'src/application/repositories/notification-repositories';
import { Notification } from './../../src/application/entities/notification';

export class InMemoryNofiticationRepository implements NotificationRepository {
  public notifications: Notification[] = [];
  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}
