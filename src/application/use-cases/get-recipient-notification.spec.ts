import { GetRecipientNotification } from './get-recipient-notification';
import { InMemoryNofiticationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { makeNotification } from '../../../test/factories/notification-factory';

describe('Get Recipient notification ', () => {
  test('it should be able to get a recipient a notification ', async () => {
    const notificationsRepository = new InMemoryNofiticationsRepository();
    const getRecipientNotifications = new GetRecipientNotification(
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

    const recipient1 = getRecipientNotifications.execute({
      recipientId: 'recipient-1',
    });
    const recipient2 = getRecipientNotifications.execute({
      recipientId: 'recipient-2',
    });
    expect((await recipient1).notifications).toHaveLength(2);
    expect((await recipient2).notifications).toHaveLength(1);
    expect((await recipient1).notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId: 'recipient-1' }),
        expect.objectContaining({ recipientId: 'recipient-1' }),
      ]),
    );
  });
});
