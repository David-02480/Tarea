import { Injectable } from '@angular/core';
import { clientes } from '../components/UC19002/tabla-data';
import{Cliente} from '../models/cliente';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import{FormularioComponent} from './../components/UC19002/formulario/formulario.component';

@Injectable({
  providedIn: 'any'
})
export class ClienteService {


  constructor() { }
  public cliente:Cliente;
  public yaEditado: boolean=false;
  private indice:number;
  private formBuilder: FormBuilder

//LISTAR CLIENTE
  getCliente():Cliente[]
  {
    return clientes;
  }
  //AGREGAR CLIENTE
  addCliente(cliente: Cliente)
  {
    clientes.push(cliente);
  }
  //EDITAR CLIENTE
  editar(cli:Cliente)
  {
    this.cliente=cli;
    this.yaEditado=true;
    console.log("Indice");
    console.log(clientes.indexOf(cli));
  }
  getEditar():Cliente{
    return this.cliente;
    this.yaEditado=false;
  }
  updateCliente(cliente:Cliente)
  {
    clientes.splice(clientes.indexOf(cliente),1,cliente);
  }
}
