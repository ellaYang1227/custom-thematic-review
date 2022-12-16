import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Company } from '@data/company';
import { AuthService } from '@services/auth.service';
import { LandscapeService } from '@services/landscape.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  landscapes!: any[];

  constructor(
    private titleServer: Title,
    private authService: AuthService,
    private landscapeService: LandscapeService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.titleServer.setTitle(Company.name);
    this.landscapeService.getLandscapes().subscribe(res => {
      this.landscapes = res;
      if (this.authService.user) { this.landscapeService.myCollects().subscribe() }
      this.spinner.hide();
    });
  }
}
