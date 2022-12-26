import { GetRecipientNotification } from './../../application/use-cases/get-recipient-notification';
import { CountRecipientNotification } from './../../application/use-cases/count-recipient-notification';
import { UnreadNotification } from './../../application/use-cases/unread-notification';
import { ReadNotification } from './../../application/use-cases/read-notification';
import { CancelNotification } from './../../application/use-cases/cancel-notification';
import { DatabaseModule } from './../database/database.modele';
import { SendNotification } from '@application/use-cases/send-notification';
import { NotificationsController } from './controllers/notification.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    CancelNotification,
    ReadNotification,
    UnreadNotification,
    CountRecipientNotification,
    GetRecipientNotification,
  ],
})
export class HttpModule {}
