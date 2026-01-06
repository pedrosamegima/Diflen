import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FooterComponent } from '../footer/footer.component';
import { MapaComponent } from '../mapa/mapa.component';

@Component({
  selector: 'app-home',
  imports: [NavBarComponent, FooterComponent, MapaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
