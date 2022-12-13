import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'member',
  //canActivate: [AuthGuard],
  loadChildren: () => import('@pages/member/member.module').then(mod => mod.MemberModule)
}, {
  path: '**', redirectTo: '/member/login', pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false,
    enableTracing: false,
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 110],
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
