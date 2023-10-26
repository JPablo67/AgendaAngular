import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HeaderModule } from '../header/header.module';
import { SidenavModule } from '../sidenav/sidenav.module';
import { UsersModule } from '../users/users.module';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HeaderModule,
    SidenavModule,
    UsersModule
  ],
  exports:[
    DashboardComponent
  ]
})
export class DashboardModule { }
