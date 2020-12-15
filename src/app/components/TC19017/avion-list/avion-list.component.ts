import { Component, OnInit } from '@angular/core';
import {Avion} from '../../../models/clAviones';
import {AvionServiceService} from '../../../services/avion-service.service';


@Component({
  selector: 'app-avion-list',
  templateUrl: './avion-list.component.html',
  styleUrls: ['./avion-list.component.css']
})
export class AvionListComponent implements OnInit{

  public mostrar : boolean;
  public vuelos : Avion[];
  
  constructor(private AvionesServicios : AvionServiceService) {
    this.mostrar = false;
   }

   Mostrar(){
    this.mostrar = true;
   }

  ngOnInit(): void {
    this.vuelos = this.AvionesServicios.getAviones();
  }
}
