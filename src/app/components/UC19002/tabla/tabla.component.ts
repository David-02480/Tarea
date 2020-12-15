import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { ClienteService } from 'src/app/services/cliente.service';
import {Cliente} from '../../../models/cliente';
import { clientes } from '../tabla-data';


@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  clientes: Cliente[];

  constructor(private clienteService:ClienteService) { 
  }

  ngOnInit(): void {
    this.clientes=this.clienteService.getCliente();
    console.log(this.clientes);
  }
  abrirParaEditar(cliente:Cliente)
  {
    this.clienteService.editar(cliente);
  }



}
