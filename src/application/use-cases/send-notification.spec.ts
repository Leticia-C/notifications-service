import { Notification } from './../entities/notification';
import { SendNotification } from './send-notification';

const notifications: Notification[] = [];

const nofiticationRepository = {
  async create(notification: Notification) {
    notifications.push(notification);
  },
};

describe('Send notification ', () => {
  test('it should be able to send a notification ', async () => {
    const sendNotification = new SendNotification(nofiticationRepository);
    await sendNotification.execute({
      content: 'Nova solicitação de amizade!',
      category: 'social',
      recipientId: 'exemple-id',
    });

    expect(notifications).toBeTruthy();
    expect(notifications).toHaveLength(1);
  });
});
