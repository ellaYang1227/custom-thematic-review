import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MyCollectsComponent } from './my-collects.component';

const routes: Routes = [{
  path: '',
  component: MyCollectsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyCollectsRoutingModule { }
