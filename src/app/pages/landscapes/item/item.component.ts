import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Company } from '@data/company';
import { AuthService } from '@services/auth.service';
import { LandscapeService } from '@services/landscape.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  landscape!: any;

  constructor(
    private titleServer: Title,
    private route: ActivatedRoute,
    private authService: AuthService,
    private landscapeService: LandscapeService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      this.landscapeService.getLandscape(id).subscribe(res => {
        if (res) {
          this.landscape = res;
          this.titleServer.setTitle(`景點介紹 - ${this.landscape.name} | ${Company.name}`);
          if (this.authService.user) { this.landscapeService.myCollects().subscribe() }
          this.spinner.hide();
        }
      });
    });
  }

}
