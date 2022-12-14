import { Component, OnInit } from '@angular/core';
import { Company } from '@data/company';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  name = Company.name;

  public get currentUrl(): string {
    return location.pathname;
  }

  constructor(
    public authService: AuthService,
  ) { }

  ngOnInit(): void {
    console.log(this.authService.cookie_access_token)
    console.log(this.authService.user)
  }

}
