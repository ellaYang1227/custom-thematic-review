import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CollectBtnModule } from '@components/collect-btn/collect-btn.module';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { ItemComponent } from './item/item.component';
import { LandscapesRoutingModule } from './landscapes-routing.module';
import { LandscapesComponent } from './landscapes.component';
import { ListComponent } from './list/list.component';

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
    FontAwesomeModule
  ]
})
export class LandscapesModule {
  constructor(lib: FaIconLibrary) {
    lib.addIconPacks(fas, fab, far);
  }
}
