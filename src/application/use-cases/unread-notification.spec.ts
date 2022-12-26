import { UnreadNotification } from './unread-notification';
import { makeNotification } from '../../../test/factories/notification-factory';
import { InMemoryNofiticationsRepository } from '../../../test/repositories/in-memory-notifications-repository';

describe('Unread notification ', () => {
  test('it should be able to unread a notification ', async () => {
    const notificationsRepository = new InMemoryNofiticationsRepository();
    const unreadNotification = new UnreadNotification(notificationsRepository);

    const notification = makeNotification({
      readTime: new Date(),
    });

    notificationsRepository.create(notification);

    await unreadNotification.execute({
      notificationId: notification.id,
    });

    expect(notificationsRepository.notifications[0].readTime).toBeNull();
  });
  test('it should not  be able to cancel a non existing notification ', async () => {
    const notificationsRepository = new InMemoryNofiticationsRepository();
    const readNotification = new UnreadNotification(notificationsRepository);

    expect(async () => {
      return readNotification.execute({
        notificationId: 'fake notificationId',
      });
    }).rejects.toThrow('Notification not found');
  });
});
