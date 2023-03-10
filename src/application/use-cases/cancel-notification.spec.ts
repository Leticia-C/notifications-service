import { makeNotification } from '../../../test/factories/notification-factory';
import { InMemoryNofiticationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { CancelNotification } from './cancel-notification';

describe('Cancel notification ', () => {
  test('it should be able to cancel a notification ', async () => {
    const notificationsRepository = new InMemoryNofiticationsRepository();
    const cancelNotification = new CancelNotification(notificationsRepository);

    const notification = makeNotification();

    notificationsRepository.create(notification);

    await cancelNotification.execute({
      notificationId: notification.id,
    });

    expect(notificationsRepository.notifications[0].canceledAt).toEqual(
      expect.any(Date),
    );
  });
  test('it should not  be able to cancel a non existing notification ', async () => {
    const notificationsRepository = new InMemoryNofiticationsRepository();
    const cancelNotification = new CancelNotification(notificationsRepository);

    expect(async () => {
      return cancelNotification.execute({
        notificationId: 'fake notificationId',
      });
    }).rejects.toThrow('Notification not found');
  });
});
