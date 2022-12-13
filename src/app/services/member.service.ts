import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
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
    private authService: AuthService,
    override spinner: NgxSpinnerService
  ) {
    super(spinner);
  }

  login(body: any): Observable<any> {
    return this.http.post<any>(this.API_ROOT + '/login', body)
      .pipe(map(result => {
        if (result.success) {
          console.log(result)
          // this.authService.changeCookie(result.data.token);
          // const redirectUrl = this.authService.redirectUrl;
          // this.router.navigate([redirectUrl ? redirectUrl : '/index']);
        }
      }), catchError(error => {
        console.error(error.error);
        return of(error.error);
      }));
  }
}
