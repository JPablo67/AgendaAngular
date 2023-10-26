import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { HeaderModule } from './header/header.module';
import { SidenavModule } from './sidenav/sidenav.module';
import { SearchModule } from './search/search.module';
import { EditarusuariosComponent } from './users/editarusuarios/editarusuarios.component';
import { ListarusuariosComponent } from './users/listarusuarios/listarusuarios.component';
import { UsersModule } from './users/users.module';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    DashboardModule,
    HeaderModule,
    SidenavModule,
    SearchModule,
    UsersModule
    
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
