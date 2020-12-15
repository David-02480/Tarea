import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Cliente} from '../../../models/cliente';
import {ClienteService} from '../../../services/cliente.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent implements OnInit {
  cliente:Cliente;
  checkForm;
  constructor(private formBuilder:FormBuilder,private clienteService:ClienteService) {
    this.cliente=clienteService.getEditar();
    this.checkForm=formBuilder.group({dui:this.cliente.dui,nombres:this.cliente.nombres,
      apellidos:this.cliente.apellidos,capital:this.cliente.capital,tipo:this.cliente.esCorriente})
   }

  ngOnInit(): void {
  }
  actualizar(data)
  {
    let nuevoCliente:Cliente=new Cliente(data.dui,data.nombres,data.apellidos,data.capital,data.tipo);
    this.checkForm.reset();
    this.clienteService.updateCliente(nuevoCliente);
  }

}
