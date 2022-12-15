import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Company } from '@data/company';
import { LandscapeService } from '@services/landscape.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-landscapes',
  templateUrl: './landscapes.component.html',
  styleUrls: ['./landscapes.component.scss']
})
export class LandscapesComponent implements OnInit {
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
  }

}
