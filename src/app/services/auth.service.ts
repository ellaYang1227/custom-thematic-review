import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { CryptoJsService } from '@models/crypto-js-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public access_token!: string;

  public get cookie_access_token(): string | null {
    return localStorage.getItem('accessToken');
  }

  public get user(): string | null {
    const user = localStorage.getItem('user');
    return user ? this.cryptoJsService.decrypt(user) : null;
  }


  // public get user(): any {
  //   if (this.cookie_access_token) {
  //     if (this.access_token !== this.cookie_access_token) { this.access_token = this.cookie_access_token }
  //     //const user = this.cryptoJsService.decrypt(this.cookie_access_token);
  //     return 'user';
  //   } else {
  //     if (this.access_token) { location.reload() }
  //     localStorage.removeItem('access_token');
  //     return undefined;
  //   }
  // }

  // // 取得 access_token
  // public get cookie_access_token(): string {
  //   const searchStr = 'access_token=';
  //   let access_token = document.cookie.split(';').find(item => item.trim().indexOf(searchStr) > -1);
  //   return access_token ? access_token.replace(searchStr, '') : '';
  // }

  redirectUrl!: string;

  constructor(
    private cryptoJsService: CryptoJsService
  ) { }

  logout(): void {
    // 刪除 cookie
    this.changeCookie();
  }

  // 改變 cookie
  changeCookie(access_token?: string) {
    const days = access_token ? 3 : -1; // cookie 儲存天數
    let exp = new Date();
    exp.setTime(exp.getTime() + days * 24 * 60 * 60 * 1000);
    let cookie = `access_token=${access_token}; expires=${exp.toUTCString()}; path=/; SameSite=Strict;`;
    if (environment.production) { cookie += `Secure` };
    document.cookie = cookie;

    if (access_token) {
      localStorage.setItem('access_token', access_token);
    } else {
      localStorage.removeItem('access_token');
    }
  }
}
