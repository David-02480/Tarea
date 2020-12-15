import { Component, OnInit /*,DoCheck*/} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { from } from 'rxjs';
import {Cliente} from '../../../models/cliente';
import {ClienteService} from '../../../services/cliente.service';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit /*,DoCheck*/{
  checkForm;
  constructor(private formBuilder: FormBuilder, private clienteService:ClienteService) { 
    this.checkForm=formBuilder.group({dui:'',nombres:'',apellidos:'',capital:'',tipo:false})
  }

  ngOnInit(): void {
  }
/*  ngDoCheck():void
  {
    if(this.clienteService.yaEditado)
    {
      this.cliente=this.clienteService.getEditar();
      this.checkForm.reset();
      this.checkForm=this.formBuilder.group({dui:this.cliente.dui,nombres:this.cliente.nombres,
        apellidos:this.cliente.apellidos,capital:this.cliente.capital,tipo:this.cliente.esCorriente});
    }
  }
*/
  onSubmit(data){
    let nuevoCliente:Cliente=new Cliente(data.dui,data.nombres,data.apellidos,data.capital,data.tipo);
    this.checkForm.reset();
    this.clienteService.addCliente(nuevoCliente);
  }
/*  actualizar(data)
  {
    let nuevoCliente:Cliente=new Cliente(data.dui,data.nombres,data.apellidos,data.capital,data.tipo);
    this.clienteService.updateCliente(nuevoCliente);
  }*/
}
