import { Notification as NotificationRaw } from '@prisma/client';
import { Notification } from '@application/entities/notification';
import { Content } from '@application/entities/content';
export class PrismaNotificationMapper {
  static toPrisma(notification: Notification) {
    return {
      id: notification.id,
      content: notification.content.value,
      category: notification.category,
      recipientId: notification.recipientId,
      readTime: notification.readTime,
      createdAt: notification.createdAt,
    };
  }
  static toDomain(raw: NotificationRaw): Notification {
    return new Notification(
      {
        content: new Content(raw.content),
        category: raw.category,
        recipientId: raw.recipientId,
        createdAt: raw.createdAt,
        readTime: raw.readTime,
      },
      raw.id,
    );
  }
}
