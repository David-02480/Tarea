import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Avion } from 'src/app/models/clAviones';
import { AvionServiceService} from 'src/app/services/avion-service.service';

@Component({
  selector: 'app-avion-create',
  templateUrl: './avion-create.component.html',
  styleUrls: ['./avion-create.component.css']
})
export class AvionCreateComponent implements OnInit{

  checkForm; 

  constructor(
    /*public formBuilder : FormBuilder,
    private avionService : AvionServiceService*/
  ) { 
    /*this.checkForm = formBuilder.group({
      id: '',
      nomAerolinea: '',
      origen: '',
      cargaMax : 0,
      tipoVuelo : false
    });*/
  }

  ngOnInit(): void {
  }

  onSubmit(data){
    let newAvion : Avion= new Avion(
      data.id,
      data.nomAerolinea,
      data.origen,
      data.cargaMax,
      data.tipoVuelo
    );
    this.checkForm.reset();
    //this.avionService.addAvion(newAvion);
  }
}
