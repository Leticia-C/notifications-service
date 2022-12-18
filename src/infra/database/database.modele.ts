import { PrismaNotificationsRepository } from './prisma/repositories/prisma-notifications-repository';
import { NotificationRepository } from 'src/application/repositories/notification-repositories';
import { PrismaService } from './prisma/prisma.service';
import { Module } from '@nestjs/common';

@Module({
  providers: [
    PrismaService,
    {
      provide: NotificationRepository,
      useClass: PrismaNotificationsRepository,
    },
  ],
  exports: [NotificationRepository],
})
export class DatabaseModule {}
