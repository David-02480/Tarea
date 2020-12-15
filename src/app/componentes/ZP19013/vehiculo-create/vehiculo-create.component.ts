import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { from } from 'rxjs';
import {Vehiculo} from '../../../models/vehiculo';
import {VehiculoService} from '../../../services/vehiculo.service';

@Component({
  selector: 'app-vehiculo-create',
  templateUrl: './vehiculo-create.component.html',
  styleUrls: ['./vehiculo-create.component.css']
})
export class VehiculoCreateComponent implements OnInit {

  checkForm;
  
  
  constructor(
    public formBuilder :FormBuilder,
    private vehiculoService : VehiculoService
  ) { 

    this.checkForm = formBuilder.group
   ({
     id :'',
    marca :'',
    modelo : '',
    aFabricacion :0,
    isPickup : false
   })
  }

  ngOnInit(): void {
  }

  onSubmit(data)
  {
    let vnew = new Vehiculo
    (
      data.id,
      data.marca,
      data.modelo,
      data.aFabricacion,
      data.isPickup
    );
     this.checkForm.reset(); 
      this.vehiculoService.addVehiculo(vnew);
  }

}
