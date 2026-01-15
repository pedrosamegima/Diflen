import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
export interface Projetos{
  nome: string;
  descricao: string;
  foto?: string;
}
@Component({
  selector: 'app-projetos',
  imports: [NavBarComponent, FooterComponent, CommonModule],
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.scss'
})
export class ProjetosComponent {
    
}
