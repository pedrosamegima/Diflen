import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import Lenis from 'lenis';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Diflen';

  ngOnInit(): void {
    //Chamando o lenis
    const lenis = new Lenis();

    //função da animação que vai rodar a cada frame 
    const raf = (time: number)=>{
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf)
  }
}
