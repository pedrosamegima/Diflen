import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FooterComponent } from '../footer/footer.component';
import { CardCelulaComponent } from '../card-celula/card-celula.component';
import { CommonModule } from '@angular/common';

export interface Celula{
  nome: string;
  lider: string;
  dia: string;
  hora: string;
  local: string;
  telefone?: string;
  imagem?: string;
}

@Component({
  selector: 'app-celulas',
  imports: [NavBarComponent, FooterComponent, CardCelulaComponent, CommonModule],
  templateUrl: './celulas.component.html',
  styleUrl: './celulas.component.scss'
})
export class CelulasComponent {

  celulas: Celula[] = [
    {
      nome: 'Célula Jovem',
      lider: 'João Silva',
      dia: 'Quarta-feira',
      hora: '19h',
      local: 'Rua A, 123',
      telefone: '5515991234567',
      imagem: '/assets/celula1.jpg'
    },
    {
      nome: 'Célula Família',
      lider: 'Maria Oliveira',
      dia: 'Sábado',
      hora: '18h',
      local: 'Rua B, 456'
      
    }
  ];

}

