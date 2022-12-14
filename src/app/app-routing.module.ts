import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@guard/auth.guard';
import { GuestGuard } from '@guard/guest.guard';

const routes: Routes = [{
  path: 'index',
  loadChildren: () => import('@pages/index/index.module').then(mod => mod.IndexModule)
}, {
  path: 'member',
  canActivate: [GuestGuard],
  loadChildren: () => import('@pages/member/member.module').then(mod => mod.MemberModule)
}, {
  path: 'scadmin',
  canActivate: [AuthGuard],
  loadChildren: () => import('@pages/scadmin/scadmin.module').then(mod => mod.ScadminModule)
}, {
  path: '**', redirectTo: '/index', pathMatch: 'full'
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
