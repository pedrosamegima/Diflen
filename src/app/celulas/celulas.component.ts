import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FooterComponent } from '../footer/footer.component';
import { CardCelulaComponent } from '../card-celula/card-celula.component';
import { CommonModule } from '@angular/common';

export interface Celula{
  nome: string;
  lideres: string;
  diaHora: string;
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
      nome: 'LIFE DIFLEN - Athenas do Sul',
      lideres: 'Amanda e Gabriel',
      diaHora: 'Sexta-Feira ás 20hrs',
      imagem: '/celula3.jpeg',
      telefone: '5515991234567'
    },
    {
      nome: 'LIFE DIFLEN - LAGO DOS IPÉS',
      lideres: 'Maju e Octavio',
      diaHora: 'Quarta-Feira ás 20hrs',
      imagem: '/assets/celula-familia.jpg',
      telefone: '5515987654321'
    },
    {
      nome: 'DIFLEN+ - Jardim Fogaça',
      lideres: 'Geh e Caf',
      diaHora: 'Quinta-Feira ás 20hrs',
      imagem: '/assets/celula-kids.jpg',
      telefone: '5515977777777'
    },
     {
      nome: 'LIFE DIFLEN - Jardim Italia',
      lideres: 'Geh e Caf',
      diaHora: 'Quinta-Feira ás 20hrs',
      imagem: '/assets/celula-kids.jpg',
      telefone: '5515977777777'
    },
    {
      nome: 'LIFE DIFLEN - Jardim Shangrilla',
      lideres: 'João e Natália',
      diaHora: 'Sexta-Feira ás 20hrs',
      imagem: '/assets/celula-kids.jpg',
      telefone: '5515977777777'
    },
    {
      nome: 'LIFE DIFLEN - Paineiras',
      lideres: 'Tarik e Queren',
      diaHora: 'Quinta-Feira ás 20hrs',
      imagem: '/assets/celula-kids.jpg',
      telefone: '5515977777777'
    },
    {
      nome: 'DIFLEN+ - Jardim Alvorada',
      lideres: 'Douglas e Júlia',
      diaHora: 'Sexta-Feira ás 20hrs',
      imagem: '/assets/celula-kids.jpg',
      telefone: '5515977777777'
    },
     {
      nome: 'Life Conexão - Online',
      lideres: 'Rafael e Ana',
      diaHora: 'Quarta-Feira ás 20hrs',
      imagem: '/assets/celula-kids.jpg',
      telefone: '5515977777777'
    },
  

  ];

}