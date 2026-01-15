import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FooterComponent } from '../footer/footer.component';
import { CardCelulaComponent } from '../card-celula/card-celula.component';
import { CommonModule } from '@angular/common';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

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

   isMobile$: Observable<boolean>;
        isTablet$: Observable<boolean>;
        isDeskTop$: Observable<boolean>;
      
        constructor(private BreakpointObserver: BreakpointObserver){ //Iniciei a dependencia que observa a tela
      
          this.isMobile$ = this.BreakpointObserver.observe([Breakpoints.HandsetPortrait]) //HandsetPortrait ele pega o celular 
          .pipe(map((result: BreakpointState)=> result.matches));
      
           this.isTablet$ = this.BreakpointObserver.observe(['(min-width: 600px) and (max-width: 959px']) //Aqui ele vai avisar quando a largura for entre esses dois numeros
          .pipe(map((result: BreakpointState)=> result.matches));
      
            this.isDeskTop$ = this.BreakpointObserver.observe(['(min-width: 960px)']) //Aqui ele vai avisar quando a largura for ate esse numero
          .pipe(map((result: BreakpointState)=> result.matches));
        }
}