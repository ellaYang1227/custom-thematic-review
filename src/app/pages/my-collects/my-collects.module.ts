import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyCollectsRoutingModule } from './my-collects-routing.module';
import { MyCollectsComponent } from './my-collects.component';
import { LandscapeCardModule } from '@components/landscape-card/landscape-card.module';
import { NoDataModule } from '@components/no-data/no-data.module';

@NgModule({
  declarations: [
    MyCollectsComponent
  ],
  imports: [
    CommonModule,
    MyCollectsRoutingModule,
    LandscapeCardModule,
    NoDataModule
  ]
})
export class MyCollectsModule { }
