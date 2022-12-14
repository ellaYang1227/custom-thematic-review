import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LandscapesRoutingModule } from './landscapes-routing.module';
import { LandscapesComponent } from './landscapes.component';

@NgModule({
  declarations: [
    LandscapesComponent
  ],
  imports: [
    CommonModule,
    LandscapesRoutingModule
  ]
})
export class LandscapesModule { }
