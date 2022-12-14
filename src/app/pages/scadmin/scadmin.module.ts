import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScadminRoutingModule } from './scadmin-routing.module';
import { ScadminComponent } from './scadmin.component';


@NgModule({
  declarations: [
    ScadminComponent
  ],
  imports: [
    CommonModule,
    ScadminRoutingModule
  ]
})
export class ScadminModule { }
