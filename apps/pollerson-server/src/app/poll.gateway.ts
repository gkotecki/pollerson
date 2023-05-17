import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { POLL_SOCKET, User } from '@pollerson/utils';
import { Server } from 'socket.io';

@WebSocketGateway({
  cors: { origin: '*' },
  namespace: 'poll',
})
export class PollGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  public handleConnection(client: User) {
    // TODO
  }

  public handleDisconnect(client: User) {
    // TODO
  }

  @SubscribeMessage(POLL_SOCKET.getUsers)
  public getUsers() {
    this.server.emit(POLL_SOCKET.users, [{ mock: 1 }, { mock: 2 }]);
  }

  @SubscribeMessage(POLL_SOCKET.getAnswers)
  public getAnswers() {
    this.server.emit(POLL_SOCKET.answers, []);
  }
}
