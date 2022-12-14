import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { MemberRoutingModule } from './member-routing.module';
import { MemberComponent } from './member.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    MemberComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    MemberRoutingModule,
    FormsModule
  ]
})
export class MemberModule { }
