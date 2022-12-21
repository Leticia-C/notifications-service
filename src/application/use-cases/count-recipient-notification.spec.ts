import { InMemoryNofiticationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { CountRecipientNotification } from './count-recipient-notification';
import { makeNotification } from '../../../test/factories/notification-factory';

describe('Count Recipient notification ', () => {
  test('it should be able to count a recipient notification ', async () => {
    const notificationsRepository = new InMemoryNofiticationsRepository();
    const countRecipientNotification = new CountRecipientNotification(
      notificationsRepository,
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-1' }),
    );
    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-1' }),
    );
    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-2' }),
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
