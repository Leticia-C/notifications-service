import { DatabaseModule } from './../database/database.modele';
import { SendNotification } from './../../application/use-cases/send-notification';
import { NotificationsController } from './../notification.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [SendNotification],
})
export class HttpModule {}
