import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Company } from '@data/company';
import { LandscapeService } from '@services/landscape.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-landscape-list',
  templateUrl: './landscape-list.component.html',
  styleUrls: ['./landscape-list.component.scss']
})
export class LandscapeListComponent implements OnInit {
  title = '景點列表';
  landscapes!: any[];

  constructor(
    private titleServer: Title,
    private landscapeService: LandscapeService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.titleServer.setTitle(`【後台管理】${this.title} | ${Company.name}`);
    this.getLandscapes();
  }

  getLandscapes() {
    this.spinner.show();
    this.landscapeService.getLandscapes().subscribe(res => {
      this.landscapes = res;
      this.spinner.hide();
    });
  }

  delLandscape(id: number) {
    this.spinner.show();
    this.landscapeService.delLandscape(id).subscribe(success => {
      if (success) { this.getLandscapes() }
    });
  }
}
