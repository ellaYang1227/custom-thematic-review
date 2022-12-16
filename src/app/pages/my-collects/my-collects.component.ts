import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Company } from '@data/company';
import { LandscapeService } from '@services/landscape.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { forkJoin, Subscription } from 'rxjs';

@Component({
  selector: 'app-my-collects',
  templateUrl: './my-collects.component.html',
  styleUrls: ['./my-collects.component.scss']
})
export class MyCollectsComponent implements OnInit {
  title = '我的收藏';
  myCollectLandscapes!: any[];
  myCollects$!: Subscription;

  constructor(
    private titleServer: Title,
    private landscapeService: LandscapeService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.titleServer.setTitle(`${this.title} | ${Company.name}`);
    forkJoin([
      this.landscapeService.getLandscapes(),
      this.landscapeService.myCollects()
    ]).subscribe(resArr => {
      this.myCollects$ = this.landscapeService.myCollects$.subscribe(myCollects => {
        if (myCollects) {
          this.myCollectLandscapes = resArr[0].filter((landscape: any) => {
            const find = myCollects.find((myCollect: any) => landscape.id === myCollect.landscapeId);
            if (find) { return landscape }
          });
          this.spinner.hide();
        }
      });
    });
  }

  ngOnDestroy(): void {
    this.myCollects$.unsubscribe();
  }
}
