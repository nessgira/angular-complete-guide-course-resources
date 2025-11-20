import {Component, OnInit, AfterViewInit, OnDestroy, signal, effect} from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit, OnDestroy, AfterViewInit {
  currentStatus = signal<'online' | 'offline' | 'unknown'>('unknown');
  private interval?: ReturnType<typeof setInterval>;

  constructor() {
    effect(() => {
      console.log(this.currentStatus())
    });
  }

  ngOnInit() {
    console.log('ON INIT');
    this.interval = setInterval(() => {
      const rand = Math.random();

      if (rand < 0.5) {
        this.currentStatus.set('online');
      } else if (rand < 0.9) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }
    }, 5000);
  }

  ngAfterViewInit() {
    console.log('AFTER VIEW INIT');
  }

  ngOnDestroy() {
    clearTimeout(this.interval);
  }
}
