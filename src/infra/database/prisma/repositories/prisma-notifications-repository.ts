import { PrismaNotificationMapper } from './../mappers/prisma-notification-mapper';
import { PrismaService } from './../prisma.service';
import { Notification } from '@application/entities/notification';
import { NotificationsRepository } from '@application/repositories/notification-repositories';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository {
  constructor(private prisma: PrismaService) {}
  async findById(notification: string): Promise<Notification | null> {
    throw new Error('Method not implemented.');
  }
  async create(notification: Notification): Promise<void> {
    const raw = PrismaNotificationMapper.toPrisma(notification);

    await this.prisma.notification.create({ data: raw });
  }
  async save(notification: Notification): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
