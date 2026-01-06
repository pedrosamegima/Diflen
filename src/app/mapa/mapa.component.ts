import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent {
  // Variável que guardará o estilo do background
  luzStyle: string = 'white';

  @HostListener('mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    // Seleciona o elemento do card
    const card = e.currentTarget as HTMLElement;
    const rect = card.getBoundingClientRect();
    
    // Calcula a posição do mouse relativa ao card
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Cria o efeito de gradiente (luz branca no centro, cinza claro nas bordas)
    this.luzStyle = `radial-gradient(circle at ${x}px ${y}px, #ffffff 0%, #f2f2f2 70%)`;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    // Volta para o fundo branco normal quando o mouse sai
    this.luzStyle = 'white';
  }
}