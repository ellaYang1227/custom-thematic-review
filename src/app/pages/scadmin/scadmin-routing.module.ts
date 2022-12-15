import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditLandscapeComponent } from './edit-landscape/edit-landscape.component';
import { LandscapeListComponent } from './landscape-list/landscape-list.component';
import { ScadminComponent } from './scadmin.component';

const routes: Routes = [{
  path: '',
  component: ScadminComponent,
  children: [{
    path: 'landscapes',
    component: LandscapeListComponent,
  }, {
    path: 'landscapes/edit',
    component: EditLandscapeComponent,
  }, {
    path: 'landscapes/edit/:id',
    component: EditLandscapeComponent,
  }, {
    path: '**', redirectTo: '/scadmin/landscapes', pathMatch: 'full'
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScadminRoutingModule { }
