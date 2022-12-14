import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { Company } from '@data/company';

import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(
    private titleServer: Title,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.titleServer.setTitle(Company.name);
    this.spinner.hide();
  }

}
