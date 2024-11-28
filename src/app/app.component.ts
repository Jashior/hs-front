import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  users: any[] = [];

  constructor() {}

  async ngOnInit() {
    try {
      const res = await fetch(
        'https://api.allorigins.win/get?url=https://hs-api.zanaris.dev/2024-Leagues-Points.json'
      );
      const data = await res.json();
      this.users = JSON.parse(data.contents);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  formatTimeDifference(timestamp: string): string {
    const now = new Date();
    const then = new Date(timestamp);
    const diff = now.getTime() - then.getTime();

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) return `${days}d ago`;
    if (hours > 0) return `${hours}h ago`;
    if (minutes > 0) return `${minutes}m ago`;
    return `${seconds}s ago`;
  }
}
