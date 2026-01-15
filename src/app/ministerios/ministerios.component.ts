import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FooterComponent } from '../footer/footer.component';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-ministerios',
  standalone: true,
  imports: [NavBarComponent, FooterComponent, CommonModule],
  templateUrl: './ministerios.component.html',
  styleUrl: './ministerios.component.scss'
})
export class MinisteriosComponent {
  //Esse array tem as info dos cards 
  listaMinisterios = [
    { nome: 'Atmosfera', img: '/min-atmosfera.png', texto: 'O Ministério da Atmosfera é quem faz todo mundo se sentir em casa. Com alegria e cuidado, preparamos o ambiente para que cada pessoa viva algo especial.' },
    { nome: 'Midia', img: '/midia.jpg', texto: 'Seja na luz, na live, nos telões ou nas fotos, o ministério de mídia usa a criatividade para comunicar o amor de Jesus.' },
    { nome: 'Kids', img: '/min-kids.png', texto: 'Com muita alegria e amor, levamos a Palavra de Deus de um jeito leve e divertido para as crianças crescerem em Jesus.' },
    { nome: 'Louvor', img: '/min-louvor.png', texto: 'O Ministério de Louvor existe para levar pessoas à presença de Deus através da música e adoração com corações entregues.' }
  ];

  //Começa a função que vai receber o nome dos ministerios
  abreWhats(ministerio:string){

    const contatos: {[key:string]: string} = {
    Atmosfera: '5515998213506',
    Midia: '5515997664761',
    Kids: '5515981408665',
    Louvor:''
    };

    //Procura o numero do whats de acordo com o ministerio
    const telefone = contatos[ministerio];

    if(!ministerio) return; //valida se ele existe
    const mensagem = `Oii, gostei do ministerio da {atmosfera} e queria saber como faço pra fazer parte`;
    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

  window.open(url, '_blank');
  
  }
          //Responsivo
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
