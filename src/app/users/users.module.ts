import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ListarusuariosComponent } from './listarusuarios/listarusuarios.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditarusuariosComponent } from './editarusuarios/editarusuarios.component';
import { AgregarusuariosComponent } from './agregarusuarios/agregarusuarios.component';


@NgModule({
  declarations: [
    ListarusuariosComponent,
    EditarusuariosComponent,
    AgregarusuariosComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    ListarusuariosComponent,
    EditarusuariosComponent,
    AgregarusuariosComponent
  ]
})
export class UsersModule { }
