import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditLandscapeComponent } from './edit-landscape/edit-landscape.component';
import { LandscapeListComponent } from './landscape-list/landscape-list.component';
import { ScadminRoutingModule } from './scadmin-routing.module';
import { ScadminComponent } from './scadmin.component';

@NgModule({
  declarations: [
    ScadminComponent,
    EditLandscapeComponent,
    LandscapeListComponent
  ],
  imports: [
    CommonModule,
    ScadminRoutingModule,
    FormsModule
  ]
})
export class ScadminModule { }
