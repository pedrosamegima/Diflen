import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Celula } from '../celulas/celulas.component';

@Component({
  selector: 'app-card-celula',
  imports: [CommonModule],
  templateUrl: './card-celula.component.html',
  styleUrl: './card-celula.component.scss'
})
export class CardCelulaComponent {
  @Input() celula!: Celula;

  abreWhats(){
    if(!this.celula.telefone) return;

    const mensagem = `Oii, me identifiquei com ${this.celula.nome}`;

    window.open(
      `https://wa.me/${this.celula.telefone}?text=${encodeURIComponent(mensagem)}`,
      '_blank'
    );
  }
}
