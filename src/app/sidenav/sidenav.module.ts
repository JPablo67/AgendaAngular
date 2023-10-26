import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidenavRoutingModule } from './sidenav-routing.module';
import { SidenavComponent } from './sidenav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SidenavComponent
  ],
  imports: [
    CommonModule,
    SidenavRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    SidenavComponent
  ]
})
export class SidenavModule { }
