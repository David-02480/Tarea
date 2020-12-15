import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { TablaComponent } from './components/UC19002/tabla/tabla.component';
import { FormularioComponent } from './components/UC19002/formulario/formulario.component';
import { AvionCreateComponent } from './components/TC19017/avion-create/avion-create.component';
import { AvionUpdateComponent } from './components/TC19017/avion-update/avion-update.component';
import { AvionDeleteComponent } from './components/TC19017/avion-delete/avion-delete.component';
import { AvionListComponent } from './components/TC19017/avion-list/avion-list.component';
import { MenuComponent } from './components/menu/menu.component';
import { VehiculoListComponent } from './componentes/ZP19013/vehiculo-list/vehiculo-list.component';
import { VehiculoCreateComponent } from './componentes/ZP19013/vehiculo-create/vehiculo-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EliminarComponent } from './components/UC19002/eliminar/eliminar.component';
import { ActualizarComponent } from './components/UC19002/actualizar/actualizar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TablaComponent,
    FormularioComponent,
    AvionCreateComponent,
    AvionUpdateComponent,
    AvionDeleteComponent,
    AvionListComponent,
    MenuComponent,
    VehiculoListComponent,
    VehiculoCreateComponent,
    EliminarComponent,
    ActualizarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
