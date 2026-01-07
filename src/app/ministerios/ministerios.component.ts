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

}
