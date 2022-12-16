import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { AuthService } from '@services/auth.service';
import { SwalDefaultService } from '@services/swal-default.service';
import { NgxSpinnerService } from 'ngx-spinner';

let swalPopup: any;

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  API_ROOT = environment.api;

  constructor(
    public spinner: NgxSpinnerService
  ) {
    swalPopup = SwalDefaultService.prototype.popupDefault;
  }

  getHeader(): {} {
    const access_token = AuthService.prototype.cookie_access_token;
    if (access_token) {
      let header: HttpHeaders;
      header = new HttpHeaders().set('Authorization', `Bearer ${access_token}`);
      return {
        headers: header
      };
    } else {
      return {};
    }
  }

  covertFormData(data: any): FormData {
    let result = new FormData();
    for (const key in data) {
      result.append(key, data[key]);
    }
    return result;
  }

  errorMsg(err: any): any {
    this.spinner.hide();
    let text = err.err;
    let logout = true;

    if (text?.match('jwt expired') || text?.match('Missing authorization header')) {
      text = '登入時間到期，請重新登入';
    } else if (err.status === 404) {
      text = '找不到該筆資料';
      logout = false;
    } else {
      console.error(text);
      return text;
    }

    swalPopup.fire({
      title: '系統訊息',
      text: text,
      icon: 'error',
      allowOutsideClick: false,
      showCloseButton: false,
      showCancelButton: false,
      confirmButtonText: logout ? '立即登入' : '回上一頁',
      customClass: {
        confirmButton: 'btn btn-outline-secondary',
        cancelButton: 'btn btn-outline-secondary'
      },
      buttonsStyling: false,
      timer: logout ? 5000 : null
    }).then((result: any) => {
      if (result.isConfirmed && !logout) { window.history.back() }

      if (logout) {
        AuthService.prototype.logout();
        window.location.href = `/member/login?redirectUrl=${location.pathname}`;
      }

      return false;
    });
  }
}
