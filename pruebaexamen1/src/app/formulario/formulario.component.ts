import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ViajesService } from '../viajes.service';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  //Definir variables para el formulario
 inputOrigin: string = '';
 inputDestiny: string = '';
 inputInitialDate: string = '';
 inputFinalDate: string = '';

 //Constructor del servicio ViajesService
 constructor(private viajesService: ViajesService) {}

 addData(){ 
  if (this.inputOrigin.trim() && this.inputDestiny.trim()) {
    this.viajesService.addDato({
      origin: this.inputOrigin.trim(),
      destiny: this.inputDestiny.trim(),
      initialdate: this.inputInitialDate.trim(),
      finaldate: this.inputFinalDate.trim()
    });
    this.inputOrigin = ''; // Limpia el input después de agregar
    this.inputDestiny = '';
    this.inputInitialDate = '';
    this.inputFinalDate = '';
  }
}
}
