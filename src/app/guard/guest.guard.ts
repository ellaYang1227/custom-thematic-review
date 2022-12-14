import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '@services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuestGuard implements CanActivate, CanActivateChild {
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const url: string = state.url;
    return this.checkIndex(url);
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.canActivate(childRoute, state);
  }

  checkIndex(url: string): true | UrlTree {
    console.log(this.authService.user)
    if (!this.authService.user) { return true }
    return this.router.parseUrl('/index');
  }
}
