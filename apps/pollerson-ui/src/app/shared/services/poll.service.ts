import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebSocketService } from './web-socket.service';
import { Answer, POLL_SOCKET, User } from '@pollerson/utils';

@Injectable({
  providedIn: 'root',
})
export class PollService {
  constructor(private ws: WebSocketService) {}

  public init(auth: User) {
    this.ws.init(POLL_SOCKET.init, { auth });
  }

  public setUsers(): void {
    this.ws.emit(POLL_SOCKET.setUsers);
  }
  public getUsers(): void {
    this.ws.emit(POLL_SOCKET.getUsers);
  }
  public users$(): Observable<User[]> {
    return this.ws.listen(POLL_SOCKET.users);
  }

  public setAnswers(): void {
    this.ws.emit(POLL_SOCKET.setAnswers);
  }
  public getAnswers(): void {
    this.ws.emit(POLL_SOCKET.getAnswers);
  }
  public answers$(): Observable<Answer[]> {
    return this.ws.listen(POLL_SOCKET.answers);
  }
}
