import { Component, signal } from '@angular/core';

@Component({
  selector: 'pollerson-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'pollerson-ui';

  mySignal = signal(1);
}
