import { HttpModule } from './infra/http/http-modele';
import { Module } from '@nestjs/common';
import { DatabaseModule } from './infra/database/database.modele';

@Module({
  imports: [HttpModule, DatabaseModule],
})
export class AppModule {}
