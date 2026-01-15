import { Component } from '@angular/core';
import { MinisteriosComponent } from '../ministerios/ministerios.component';
import { RouterModule } from '@angular/router';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common'; // Importe aqui
@Component({
  selector: 'app-nav-bar',
  imports: [RouterModule, CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  

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
