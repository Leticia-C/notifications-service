import { Notification } from '../../application/entities/notification';
import { Content } from './../entities/content';
import { InMemoryNofiticationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { CountRecipientNotification } from './count-recipient-notification';
import { count } from 'console';

describe('Count Recipient notification ', () => {
  test('it should be able to cancel a notification ', async () => {
    const notificationsRepository = new InMemoryNofiticationsRepository();
    const countRecipientNotification = new CountRecipientNotification(
      notificationsRepository,
    );

    await notificationsRepository.create(
      new Notification({
        category: 'social',
        content: new Content('Nova solicitação de amizade!'),
        recipientId: 'recipient-1',
      }),
    );
    await notificationsRepository.create(
      new Notification({
        category: 'social',
        content: new Content('Nova solicitação de amizade!'),
        recipientId: 'recipient-1',
      }),
    );
    await notificationsRepository.create(
      new Notification({
        category: 'social',
        content: new Content('Nova solicitação de amizade!'),
        recipientId: 'recipient-2',
      }),
    );

    const recipient1 = countRecipientNotification.execute({
      recipientId: 'recipient-1',
    });
    const recipient2 = countRecipientNotification.execute({
      recipientId: 'recipient-2',
    });
    expect((await recipient1).count).toEqual(2);
    expect((await recipient2).count).toEqual(1);
  });
});
