import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebSocketService } from './web-socket.service';

@Injectable({
  providedIn: 'root',
})
export class LobbyService {
  constructor(private ws: WebSocketService) {}

  public login(auth: any) {
    this.ws.init('lobby', { auth });
  }

  public emitPlayers(): void {
    this.ws.emit('getPlayers');
  }

  public getPlayers(): Observable<any> {
    return this.ws.listen('currentLobby');
  }
}
