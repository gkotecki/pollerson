import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PollGateway } from './poll.gateway';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, PollGateway],
})
export class AppModule {}
