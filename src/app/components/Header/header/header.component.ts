import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  hidden = false;
  notificationCount: number = 35; 

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  openModalNotificacoes(): void {
    console.log('openModalNotificacoes');
  }
}
