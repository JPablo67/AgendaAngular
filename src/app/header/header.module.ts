import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { HeaderComponent } from './header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchModule } from '../search/search.module';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    HeaderRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SearchModule
  ],
  exports:[
    HeaderComponent
  ]
  
})
export class HeaderModule { }
