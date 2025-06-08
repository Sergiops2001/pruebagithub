import { Component } from '@angular/core';
import { ViajesService } from '../viajes.service';
@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [],
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
   constructor(private viajesService: ViajesService) {
    this.datos = this.viajesService.getDatos();
  }
   datos: any[] = [];

}
