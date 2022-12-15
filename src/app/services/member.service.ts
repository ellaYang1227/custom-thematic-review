import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CryptoJsService } from '@models/crypto-js-service';
import { NgxSpinnerService } from 'ngx-spinner';
import { catchError, map, Observable, of } from 'rxjs';
import { AuthService } from './auth.service';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class MemberService extends BaseService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private cryptoJsService: CryptoJsService,
    override spinner: NgxSpinnerService
  ) {
    super(spinner);
  }

  login(body: any): Observable<any> {
    return this.http.post<any>(this.API_ROOT + '/login', body)
      .pipe(map(result => {
        if (result) { this.setAuth(result) }
      }), catchError(error => {
        console.error(error.error);
        return of(error.error);
      }));
  }

  // 0: 一般使用者 1:管理者
  register(body: any): Observable<any> {
    body.permissions = 0;
    return this.http.post<any>(this.API_ROOT + '/register', body)
      .pipe(map(result => {
        console.log(result)
        if (result) { this.setAuth(result) }
      }), catchError(error => {
        console.error(error.error);
        return of(error.error);
      }));
  }

  setAuth(data: any) {
    console.log(data.user.permissions)
    localStorage.setItem('accessToken', data.accessToken);
    localStorage.setItem('user', this.cryptoJsService.encrypt(data.user));
    const redirectUrl = this.route.snapshot.queryParamMap.get('redirectUrl');
    let goToUrl = '';
    if (redirectUrl) {
      goToUrl = redirectUrl;
    } else {
      goToUrl = data.user.permissions ? '/scadmin/landscapes' : '/landscapes';
    }

    this.router.navigate([goToUrl]);
  }
}
