import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CollectBtnModule } from '@components/collect-btn/collect-btn.module';

import { ItemComponent } from './item/item.component';
import { LandscapesRoutingModule } from './landscapes-routing.module';
import { LandscapesComponent } from './landscapes.component';
import { ListComponent } from './list/list.component';

import { LandscapeCardModule } from '@components/landscape-card/landscape-card.module';

@NgModule({
  declarations: [
    LandscapesComponent,
    ListComponent,
    ItemComponent
  ],
  imports: [
    CommonModule,
    LandscapesRoutingModule,
    CollectBtnModule,
    LandscapeCardModule
  ]
})
export class LandscapesModule { }
