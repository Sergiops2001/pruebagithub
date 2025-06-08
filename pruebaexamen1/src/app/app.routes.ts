import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListadoComponent } from './listado/listado.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'listado', component: ListadoComponent }
];
