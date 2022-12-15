import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CryptoJsService } from '@models/crypto-js-service';
import { NgxSpinnerService } from 'ngx-spinner';
import { catchError, map, Observable, of } from 'rxjs';
import { AuthService } from './auth.service';
import { BaseService } from './base.service';
import { SwalDefaultService } from '@services/swal-default.service';

let swalPopup: any;
let swalToast: any;

@Injectable({
  providedIn: 'root'
})
export class LandscapeService extends BaseService {

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private swalDefaultService: SwalDefaultService,
    override spinner: NgxSpinnerService
  ) {
    super(spinner);
    swalPopup = this.swalDefaultService.popupDefault;
    swalToast = this.swalDefaultService.toastDefault;
  }

  addLandscape(body: any): Observable<any> {
    body.update_date = new Date();
    return this.http.post<any>(`${this.API_ROOT}/600/users/${this.authService.user.id}/landscapes`, body, this.getHeader())
      .pipe(map(result => result), catchError(error => {
        this.errorMsg(error.error);
        return of(false);
      }));
  }

  getLandscapes(): Observable<any> {
    return this.http.get<any>(`${this.API_ROOT}/444/landscapes`)
      .pipe(map(result => result.sort((a: any, b: any) => a.update_date > b.update_date ? -1 : 1)), catchError(error => {
        this.errorMsg(error.error);
        return of(false);
      }));
  }

  getLandscape(id: number): Observable<any> {
    return this.http.get<any>(`${this.API_ROOT}/400/landscapes/${id}`, this.getHeader())
      .pipe(map(result => result), catchError(error => {
        this.errorMsg(error.error);
        return of(false);
      }));
  }

  delLandscape(id: number): Observable<any> {
    return this.http.delete<any>(`${this.API_ROOT}/600/landscapes/${id}`, this.getHeader())
      .pipe(map(result => {
        swalToast.fire({ icon: 'error', title: '刪除成功' });

        return true;
      }), catchError(error => {
        this.spinner.hide();
        this.errorMsg(error.error);
        let err = error.error;
        if (err.match('Private resource access: entity must have a reference to the owner id')) {
          err = '您不是該筆資料的擁有者';
        }

        swalPopup.fire({
          icon: 'error',
          title: '刪除失敗',
          text: err,
          showConfirmButton: false,
        });

        return of(false);
      }));
  }

  editLandscape(id: number, body: any): Observable<any> {
    body.update_date = new Date();
    return this.http.patch<any>(`${this.API_ROOT}/600/landscapes/${id}`, body, this.getHeader())
      .pipe(map(result => result), catchError(error => {
        this.errorMsg(error.error);
        return of(false);
      }));
  }
}

