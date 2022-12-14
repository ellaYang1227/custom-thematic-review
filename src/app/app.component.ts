import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Company } from '@data/company';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = Company.name;
  isMember = false;

  constructor(
    private router: Router,
    private spinner: NgxSpinnerService
  ) {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationStart) { this.spinner.show() }

      if (event instanceof NavigationEnd) {
        setTimeout(() => this.isMember = this.router.url.match('member') ? true : false, 0);
      }
    });
  }
}
