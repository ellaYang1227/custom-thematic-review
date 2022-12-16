import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@services/auth.service';
import { LandscapeService } from '@services/landscape.service';
import { SwalDefaultService } from '@services/swal-default.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subscription } from 'rxjs';

let swalPopup: any;

@Component({
  selector: 'app-collect-btn',
  templateUrl: './collect-btn.component.html',
  styleUrls: ['./collect-btn.component.scss']
})
export class CollectBtnComponent implements OnInit {
  myCollects$!: Subscription;
  currentCollectId!: number;
  @Input() id!: number;

  constructor(
    private router: Router,
    private authService: AuthService,
    private landscapeService: LandscapeService,
    private swalDefaultService: SwalDefaultService,
    private spinner: NgxSpinnerService
  ) {
    swalPopup = this.swalDefaultService.popupDefault;
  }

  ngOnInit(): void {
    this.myCollects$ = this.landscapeService.myCollects$.subscribe(res => {
      if (res) {
        this.currentCollectId = res.find(item => item.landscapeId === this.id)?.id;
        this.spinner.hide();
      }
    });
  }

  changeCollect() {
    if (!this.authService.user) {
      swalPopup.fire({
        icon: 'info',
        title: '您尚未登入',
        text: '想收藏景點，請先登入',
        showCancelButton: false,
        confirmButtonText: '立即登入'
      }).then((result: any) => {
        if (result.isConfirmed) { this.router.navigate(['/member/login'], { queryParams: { redirectUrl: this.router.url } }) }
      });
    } else {
      this.spinner.show();
      if (!this.currentCollectId) {
        this.landscapeService.addCollect(this.id).subscribe(res => {
          if (res?.id) { this.spinner.hide() }
        });
      } else {
        this.landscapeService.delCollect(this.currentCollectId).subscribe(res => this.spinner.hide());
      }

    }
  }

  ngOnDestroy(): void {
    this.myCollects$.unsubscribe();
  }
}
