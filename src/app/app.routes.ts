import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MinisteriosComponent } from './ministerios/ministerios.component';
import { CelulasComponent } from './celulas/celulas.component';
import { ProjetosComponent } from './projetos/projetos.component';

export const routes: Routes = [
    {path:'home', component: HomeComponent},
    {path:'ministerios', component: MinisteriosComponent},
    {path:'celulas', component: CelulasComponent},
    {path:'projetos', component: ProjetosComponent}
];
