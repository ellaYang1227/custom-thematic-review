import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandscapeCardComponent } from './landscape-card.component';
import { CollectBtnModule } from '@components/collect-btn/collect-btn.module';

import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [
    LandscapeCardComponent
  ],
  imports: [
    CommonModule,
    CollectBtnModule,
    FontAwesomeModule,
    RouterModule
  ],
  exports: [
    LandscapeCardComponent
  ]
})
export class LandscapeCardModule {
  constructor(lib: FaIconLibrary) {
    lib.addIconPacks(fas, fab, far);
  }
}
