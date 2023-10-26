import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path:'',component:DashboardComponent
  },
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      /**IMPORTANTE: cuando la aplicacion cargue la ruta
       * http://localhost:4200/dashboard lo vamos a redireccionar a su hijo: movies
       * */
      {
        path: '', redirectTo: '/dashboard/movies', pathMatch: 'full'
      },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
