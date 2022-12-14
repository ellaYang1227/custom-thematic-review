import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandscapesComponent } from './landscapes.component';

const routes: Routes = [{
  path: '',
  component: LandscapesComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandscapesRoutingModule { }
