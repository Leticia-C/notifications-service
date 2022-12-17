import { Content } from './content';
import { Notification } from './notification';

describe('Notification ', () => {
  test('it should be able to create a notification ', () => {
    const notification = new Notification({
      content: new Content('Nova solicitação de amizade!'),
      category: 'social',
      recipientId: 'exemple-id',
    });

    expect(notification).toBeTruthy();
  });
});
