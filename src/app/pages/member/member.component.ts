import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { Company } from '@data/company';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {
  title!: string;

  constructor(
    private titleServer: Title,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.title = event.url.match('login') ? '登入' : '註冊';
        this.titleServer.setTitle(`${this.title} | ${Company.name}`);
        this.spinner.hide();
      }
    });
  }

  ngOnInit(): void {
  }

}
