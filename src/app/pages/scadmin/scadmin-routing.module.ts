import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ScadminComponent } from './scadmin.component';

const routes: Routes = [{
  path: '',
  component: ScadminComponent,
  // children: [{
  //   path: 'login',
  //   component: LoginComponent,
  // }, {
  //   path: 'register',
  //   component: RegisterComponent
  // }, {
  //   path: '**', redirectTo: '/member/login', pathMatch: 'full'
  // }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScadminRoutingModule { }
