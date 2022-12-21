import { ReadNotification } from './read-notification';
import { makeNotification } from '../../../test/factories/notification-factory';
import { InMemoryNofiticationsRepository } from '../../../test/repositories/in-memory-notifications-repository';

describe('Read notification ', () => {
  test('it should be able to read a notification ', async () => {
    const notificationsRepository = new InMemoryNofiticationsRepository();
    const readNotification = new ReadNotification(notificationsRepository);

    const notification = makeNotification();

    notificationsRepository.create(notification);

    await readNotification.execute({
      notificationId: notification.id,
    });

    expect(notificationsRepository.notifications[0].readAt).toEqual(
      expect.any(Date),
    );
  });
  test('it should not  be able to cancel a non existing notification ', async () => {
    const notificationsRepository = new InMemoryNofiticationsRepository();
    const readNotification = new ReadNotification(notificationsRepository);

    expect(async () => {
      return readNotification.execute({
        notificationId: 'fake notificationId',
      });
    }).rejects.toThrow('Notification not found');
  });
});
