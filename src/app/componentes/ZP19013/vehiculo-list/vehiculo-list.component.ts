import { formatNumber } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {Vehiculo} from  '../../../models/vehiculo';
import {VehiculoService} from '../../../services/vehiculo.service';

@Component({
  selector: 'app-vehiculo-list',
  templateUrl: './vehiculo-list.component.html',
  styleUrls: ['./vehiculo-list.component.css']
})
export class VehiculoListComponent implements OnInit {

vehiculos : Vehiculo[];

  constructor (private vehiculoService : VehiculoService ) { }

ngOnInit(): void {

this.vehiculos = this.vehiculoService.getsVehiculos();
console.log(this.vehiculos);
  
}

}
