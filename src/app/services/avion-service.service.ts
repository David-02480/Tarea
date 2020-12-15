import { Injectable } from '@angular/core';
import {aviones} from '../models/Avion';
import { Avion } from '../models/clAviones';


@Injectable({
  providedIn: 'any'
})

export class AvionServiceService {
  constructor() { }

  getAviones(): Avion[]{
    return aviones;
  }

  addAvion(avion: Avion){
    aviones.push(avion);
  }
}
