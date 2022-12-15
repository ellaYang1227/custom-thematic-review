import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Company } from '@data/company';
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
    private landscapeService: LandscapeService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.titleServer.setTitle(Company.name);
    this.landscapeService.getLandscapes().subscribe(res => {
      console.log(res)
      this.landscapes = res;
      this.spinner.hide();
    });

    this.getMyCollects();
  }

  getMyCollects() {
    this.spinner.show();
    this.landscapeService.myCollects().subscribe(res => {
      console.log(res)
      //this.landscapes = res;
      this.spinner.hide();
    });
  }

  onResIsSuccess(success: boolean) {
    if (success) { this.getMyCollects() }
  }
}
