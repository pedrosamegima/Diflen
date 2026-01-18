import { Component, OnInit, Inject, inject } from '@angular/core';
import { NavigationEnd, RouterOutlet, Router } from '@angular/router';
import Lenis from 'lenis';
import { filter } from 'rxjs';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Diflen';

  private router = inject(Router);

  ngOnInit(): void {
    //Chamando o lenis
    const lenis = new Lenis();

    //função da animação que vai rodar a cada frame 
    const raf = (time: number)=>{
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf)
    // Forçar o lenis ir pro começo da pagina quando troca de pag

  this.router.events.pipe(
    filter(event => event instanceof NavigationEnd) // o event instanceof navigationEnd vê se a troca de pag(rota) terminou
  ).subscribe(() => {
    lenis.scrollTo(0, { immediate: true}); // Se terminou, ao mudar de rota a pag começa no topo
  });
  }  
}

  
