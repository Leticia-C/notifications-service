import { Notification } from './../entities/notification';

export default abstract class NotificationRepository {
  abstract create(notification: Notification): Promise<void>;
}
