import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit {
  currentStatus: 'online' | 'offline' | 'unknown' = 'offline';

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      const time = Math.random();

      if (time < 0.5) {
        this.currentStatus = 'online';
      } else if (0.5 < time && time < 0.8) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 1000);
  }
}
