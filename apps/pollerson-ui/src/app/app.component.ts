import { Component, OnInit, inject, signal } from '@angular/core';
import { fromEvent, map, switchMap, tap } from 'rxjs';
import { LobbyService } from './shared/services/lobby.service';

@Component({
  selector: 'pollerson-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'pollerson-ui';

  mySignal = signal(1);

  lobby = inject(LobbyService)

  ngOnInit(): void {
    this.lobby.login({})
    this.lobby.getPlayers().subscribe(console.log)
  }
}
