import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SwalDefaultService } from '@services/swal-default.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { BehaviorSubject, catchError, map, Observable, of } from 'rxjs';
import { AuthService } from './auth.service';
import { BaseService } from './base.service';

let swalPopup: any;
let swalToast: any;

@Injectable({
  providedIn: 'root'
})
export class LandscapeService extends BaseService {
  myCollects$ = new BehaviorSubject<any[] | false>(false);

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

  getLandscapes(): Observable<any> {
    return this.http.get<any>(`${this.API_ROOT}/444/landscapes`)
      .pipe(map(result => result.sort((a: any, b: any) => a.update_date > b.update_date ? -1 : 1)), catchError(error => {
        this.errorMsg(error);
        return of(this.errorMsg(error));
      }));
  }

  getLandscape(id: number): Observable<any> {
    return this.http.get<any>(`${this.API_ROOT}/444/landscapes/${id}`)
      .pipe(map(result => result), catchError(error => {
        this.errorMsg(error);
        return of(this.errorMsg(error));
      }));
  }

  addLandscape(body: any): Observable<any> {
    return this.http.post<any>(`${this.API_ROOT}/660/landscapes`, body, this.getHeader())
      .pipe(map(result => result), catchError(error => {
        console.error(error)
        return of(this.errorMsg(error));
      }));
  }

  editLandscape(id: number, body: any): Observable<any> {
    return this.http.patch<any>(`${this.API_ROOT}/600/landscapes/${id}`, body, this.getHeader())
      .pipe(map(result => result), catchError(error => {
        this.errorMsg(error);
        return of(this.errorMsg(error));
      }));
  }


  delLandscape(id: number): Observable<any> {
    return this.http.delete<any>(`${this.API_ROOT}/600/landscapes/${id}`, this.getHeader())
      .pipe(map(result => {
        swalToast.fire({ icon: 'error', title: '刪除成功' });

        return true;
      }), catchError(error => {
        this.spinner.hide();
        this.errorMsg(error);
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

        return of(this.errorMsg(error));
      }));
  }

  addCollect(id: number): Observable<any> {
    const body = {
      landscapeId: id,
      userId: this.authService.user.id,
      create_date: new Date()
    };

    return this.http.post<any>(`${this.API_ROOT}/660/collects`, body, this.getHeader())
      .pipe(map(result => {
        swalToast.fire({ icon: 'success', title: '加入收藏成功' });
        this.myCollects().subscribe();
        return result;
      }), catchError(error => {
        return of(this.errorMsg(error));
      }));
  }

  delCollect(id: number): Observable<any> {
    return this.http.delete<any>(`${this.API_ROOT}/600/collects/${id}`, this.getHeader())
      .pipe(map(result => {
        swalToast.fire({ icon: 'success', title: '移除收藏成功' });
        this.myCollects().subscribe();
        return result;
      }), catchError(error => {
        return of(this.errorMsg(error));
      }));
  }

  myCollects(): Observable<any> {
    return this.http.get<any>(`${this.API_ROOT}/400/users/${this.authService.user.id}/collects`, this.getHeader())
      .pipe(map(result => {
        this.myCollects$.next(result);
        return result;
      }), catchError(error => {
        this.errorMsg(error);
        this.myCollects$.next(false);
        return of(this.errorMsg(error));
      }));
  }
}

