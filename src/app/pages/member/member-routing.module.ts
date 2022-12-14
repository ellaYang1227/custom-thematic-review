import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { MemberComponent } from './member.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [{
  path: '',
  component: MemberComponent,
  children: [{
    path: 'login',
    component: LoginComponent,
  }, {
    path: 'register',
    component: RegisterComponent
  }, {
    path: '**', redirectTo: '/member/login', pathMatch: 'full'
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
