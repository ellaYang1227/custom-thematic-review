import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Company } from '@data/company';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-landscapes',
  templateUrl: './landscapes.component.html',
  styleUrls: ['./landscapes.component.scss']
})
export class LandscapesComponent implements OnInit {

  constructor(
    private titleServer: Title,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.titleServer.setTitle(Company.name);
    this.spinner.hide();
  }

}
