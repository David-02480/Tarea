import { componentFactoryName } from '@angular/compiler';
import { createComponent } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { AvionCreateComponent } from './components/TC19017/avion-create/avion-create.component';
import { AvionListComponent } from './components/TC19017/avion-list/avion-list.component';
import { VehiculoListComponent } from './componentes/ZP19013/vehiculo-list/vehiculo-list.component';
import{FormularioComponent} from './components/UC19002/formulario/formulario.component';
import {TablaComponent} from './components/UC19002/tabla/tabla.component';
import {ActualizarComponent} from './components/UC19002/actualizar/actualizar.component';
import { from } from 'rxjs';
 
const routes: Routes = [
  {path: 'Menu', component: MenuComponent,
  children: [
    {path: 'List', component: AvionListComponent},
    {path: 'Create', component: AvionCreateComponent}
  ] },
  {path: 'listado', component: VehiculoListComponent},
  {path:'cliente-form',component:FormularioComponent},
  {path:"cliente-tabla",component:TablaComponent},
  {path: "actualizar-cliente",component:ActualizarComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
