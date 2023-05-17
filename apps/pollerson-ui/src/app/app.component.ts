import { Component, OnInit, inject, signal } from '@angular/core';
import { fromEvent, map, switchMap, tap } from 'rxjs';
import { PollService } from './shared/services/poll.service';

@Component({
  selector: 'pollerson-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'pollerson-ui';

  mySignal = signal(1);

  lobby = inject(PollService);

  ngOnInit(): void {
    this.lobby.init({});
    this.lobby.getUsers();
    this.lobby.users$().subscribe(console.log);
  }
}
