import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarusuariosComponent } from './listarusuarios/listarusuarios.component';
import { AgregarusuariosComponent } from './agregarusuarios/agregarusuarios.component';

const routes: Routes = [

  {
    /**IMPORTANTE: cuando la aplicacion cargue la ruta
       * http://localhost:4200/dashboard/movies vamos a cargar el componente: PopularComponent
       * */
    path:'', component:ListarusuariosComponent
  },
  {
    /**IMPORTANTE: cuando la aplicacion cargue la ruta
       * http://localhost:4200/dashboard/movies vamos a cargar el componente: PopularComponent
       * */
    path:'agregar', component:AgregarusuariosComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
