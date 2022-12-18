import { SendNotification } from './../application/use-cases/send-notification';
import { CreateNotificationBody } from './http/dtos/create-notifications-body';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('notifications')
export class NotificationsController {
  constructor(private SendNotification: SendNotification) {}
  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { recipientId, content, category } = body;
    const {} = await this.SendNotification.execute({
      recipientId,
      content,
      category,
    });
  }
}
