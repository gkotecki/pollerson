import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LobbyGateway } from './socket.gateway';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, LobbyGateway],
})
export class AppModule {}
