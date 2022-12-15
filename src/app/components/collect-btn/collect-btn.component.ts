import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@services/auth.service';
import { LandscapeService } from '@services/landscape.service';
import { SwalDefaultService } from '@services/swal-default.service';
import { NgxSpinnerService } from 'ngx-spinner';

let swalPopup: any;
let swalToast: any;

@Component({
  selector: 'app-collect-btn',
  templateUrl: './collect-btn.component.html',
  styleUrls: ['./collect-btn.component.scss']
})
export class CollectBtnComponent implements OnInit {

  @Input() id!: number;
  @Output() resIsSuccess = new EventEmitter<boolean>();

  constructor(
    private router: Router,
    private authService: AuthService,
    private landscapeService: LandscapeService,
    private swalDefaultService: SwalDefaultService,
    private spinner: NgxSpinnerService
  ) {
    swalPopup = this.swalDefaultService.popupDefault;
    swalToast = this.swalDefaultService.toastDefault;
  }

  ngOnInit(): void {
  }

  changeCollect() {
    console.log(this.id);
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
      this.landscapeService.addCollect(this.id).subscribe(res => {
        console.log(res)
        if (res.id) { this.resIsSuccess.emit(res.id ? true : false) }
      })
    }

  }
}
