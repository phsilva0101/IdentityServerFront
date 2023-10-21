import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() titulo: string = '';
  @Input() quantidade: number = 0;

  constructor(private route: Router) {}

  irParaAgendamentos(): void {
    this.route.navigate(['/agendamentos']);
  }
}
