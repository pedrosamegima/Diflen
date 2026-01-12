import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-ministerios',
  imports: [NavBarComponent, FooterComponent],
  templateUrl: './ministerios.component.html',
  styleUrl: './ministerios.component.scss'
})
export class MinisteriosComponent {
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
}
