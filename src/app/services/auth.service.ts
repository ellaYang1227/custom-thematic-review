import { Injectable } from '@angular/core';
import { CryptoJsService } from '@models/crypto-js-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public get cookie_access_token(): string | null {
    return localStorage.getItem('accessToken');
  }

  public get user(): any {
    const user = localStorage.getItem('user');
    return user ? this.cryptoJsService.decrypt(user) : null;
  }

  redirectUrl!: string;

  constructor(
    private cryptoJsService: CryptoJsService
  ) {
    // 監聽 localStorage(手動移除有效)
    window.addEventListener('storage', (event) => { location.reload() });
  }

  logout(): void {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('user');
  }
}
