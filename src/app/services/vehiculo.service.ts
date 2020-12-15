import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { Vehiculo } from '../models/vehiculo';
import {vehiculos}  from '../componentes/ZP19013/vehiculo-list/vehiculo-data';

 @Injectable({
  providedIn: 'any'
})

export class VehiculoService {

  
  constructor() { }

  getsVehiculos():Vehiculo[]
  {
   return vehiculos;
  }

  addVehiculo(vehiculo : Vehiculo)
  {
    vehiculos.push(vehiculo);

  }



}
