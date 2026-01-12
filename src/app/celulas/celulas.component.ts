import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FooterComponent } from '../footer/footer.component';
import { CardCelulaComponent } from '../card-celula/card-celula.component';
import { CommonModule } from '@angular/common';

export interface Celula{
  nome: string;
  lideres: string;
  diaHora: string;
  descricao: string;
  imagem: string;
  telefone: string;
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
      nome: 'LIFE DIFLEN - VILA NASTRI',
      lideres: 'Amanda e Gabriel',
      diaHora: 'Sexta-Feira ás 20hrs',
      descricao: 'Um ambiente cheio de fé, amizade e crescimento espiritual para jovens.',
      imagem: '/celula3.jpeg',
      telefone: '5515991234567'
    },
    {
      nome: 'LIFE DIFLEN - LAGO DOS IPÉS',
      lideres: 'Maju e Octavio',
      diaHora: 'Quarta-Feira ás 20hrs',
      descricao: 'Células voltadas para fortalecer famílias na presença de Deus.',
      imagem: '/assets/celula-familia.jpg',
      telefone: '5515987654321'
    },
    {
      nome: 'LIFE DIFLEN - Jardim Fogaça',
      lideres: 'Geh e Caf',
      diaHora: 'Quinta-Feira ás 20hrs',
      descricao: 'Lugar onde as crianças aprendem a Palavra com alegria e amor.',
      imagem: '/assets/celula-kids.jpg',
      telefone: '5515977777777'
    },
     {
      nome: 'LIFE DIFLEN - Jardim Italia',
      lideres: 'Geh e Caf',
      diaHora: 'Quinta-Feira ás 20hrs',
      descricao: 'Lugar onde as crianças aprendem a Palavra com alegria e amor.',
      imagem: '/assets/celula-kids.jpg',
      telefone: '5515977777777'
    },
  

  ];

}