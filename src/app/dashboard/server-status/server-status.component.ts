import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit, OnDestroy {
  currentStatus: 'online' | 'offline' | 'unknown' = 'offline';
  private interval?: ReturnType<typeof setInterval>; //or NodeJs.Timeout

  constructor() {}

  ngOnInit() {
    this.interval = setInterval(() => {
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

  ngOnDestroy() {
    clearTimeout(this.interval);
  }
}
