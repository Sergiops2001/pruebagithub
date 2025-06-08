import { Component } from '@angular/core';
import { FormularioComponent } from '../formulario/formulario.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormularioComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {}
