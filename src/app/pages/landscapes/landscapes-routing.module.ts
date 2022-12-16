import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemComponent } from './item/item.component';
import { LandscapesComponent } from './landscapes.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [{
  path: '',
  component: LandscapesComponent,
  children: [{
    path: '',
    component: ListComponent,
  }, {
    path: ':id',
    component: ItemComponent,
  }, {
    path: '**', redirectTo: '/landscapes', pathMatch: 'full'
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandscapesRoutingModule { }
