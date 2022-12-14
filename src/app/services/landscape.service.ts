import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CryptoJsService } from '@models/crypto-js-service';
import { NgxSpinnerService } from 'ngx-spinner';
import { catchError, map, Observable, of } from 'rxjs';
import { AuthService } from './auth.service';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class LandscapeService extends BaseService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService,
    private cryptoJsService: CryptoJsService,
    override spinner: NgxSpinnerService
  ) {
    super(spinner);
  }

  addLandscape(body: any): Observable<any> {
    body.creation_date = new Date();
    return this.http.post<any>(this.API_ROOT + '/660/landscapes', body, this.getHeader())
      .pipe(map(result => result), catchError(error => {
        this.errorMsg(error.error);
        console.error(error.error);
        return of(error.error);
      }));
  }
}

