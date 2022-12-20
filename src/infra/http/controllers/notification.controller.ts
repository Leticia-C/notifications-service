import { NotificationViewModel } from './../view-models/notification-view-model';
import { SendNotification } from '@application/use-cases/send-notification';
import { CreateNotificationBody } from '../../http/dtos/create-notifications-body';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('notifications')
export class NotificationsController {
  constructor(private sendNotification: SendNotification) {}
  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { recipientId, content, category } = body;
    const { notification } = await this.sendNotification.execute({
      recipientId,
      content,
      category,
    });
    return { notification: NotificationViewModel.toHTTP(notification) };
  }
}
