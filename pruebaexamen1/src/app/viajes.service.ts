import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViajesService {
   private datos: { origin: string, destiny: string }[] = [];
     getDatos() {
    return this.datos;
  }
  //metodo para agregar un dato al array
  addDato(dato: { origin: string, destiny: string, initialdate: string, finaldate: string }) {
    this.datos.push(dato);
  } 
  constructor() { }
}
