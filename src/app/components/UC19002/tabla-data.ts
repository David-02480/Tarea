import { from } from 'rxjs';
import {Cliente} from '../../models/cliente';
export let clientes: Cliente[];

clientes=[
    new Cliente(100000,"David Alexander","Umaña Cortez",300,true),
    new Cliente(503000,"Carlos","Martinez",500,false),
    new Cliente(903040,"Roberto","Enrique",1100,true)
 ];