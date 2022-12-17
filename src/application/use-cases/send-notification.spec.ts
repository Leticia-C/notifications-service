import { SendNotification } from './send-notification';

describe('Send otification ', () => {
  test('it should be able to send a notification ', async () => {
    const sendNotification = new SendNotification();
    const { notification } = await sendNotification.execute({
      content: 'Nova solicitação de amizade!',
      category: 'social',
      recipientId: 'exemple-id',
    });

    expect(notification).toBeTruthy();
  });
});
