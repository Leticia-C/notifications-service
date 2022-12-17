import { InMemoryNofiticationRepository } from './../../../test/repositories/in-memory-notifications-repository';
import { SendNotification } from './send-notification';

describe('Send notification ', () => {
  test('it should be able to send a notification ', async () => {
    const notificationsRepository = new InMemoryNofiticationRepository();
    const sendNotification = new SendNotification(notificationsRepository);
    const { notification } = await sendNotification.execute({
      content: 'Nova solicitação de amizade!',
      category: 'social',
      recipientId: 'exemple-id',
    });

    expect(notificationsRepository.notifications).toBeTruthy();
    expect(notificationsRepository.notifications).toHaveLength(1);
    expect(notificationsRepository.notifications[0]).toEqual(notification);
  });
});
