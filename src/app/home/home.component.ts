import { AfterViewInit, Component, HostListener, ViewChild, ElementRef} from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FooterComponent } from '../footer/footer.component';
import { MapaComponent } from '../mapa/mapa.component';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [NavBarComponent, FooterComponent, MapaComponent, CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('meuVideo') videoRef!: ElementRef<HTMLVideoElement>;
  //Força o autoplay e deixa ele mudo
  ngAfterViewInit(): void {
    const video = this.videoRef.nativeElement;
    video.muted = true;
    video.play().catch(error =>{
      console.log("Navegador bloqueou o autoplay", error);
    });
  }
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
