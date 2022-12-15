import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from '@data/company';
import { FormsSchema } from '@data/forms-schema';
import { LandscapeService } from '@services/landscape.service';
import { SwalDefaultService } from '@services/swal-default.service';
import { NgxSpinnerService } from 'ngx-spinner';

let swalToast: any;

@Component({
  selector: 'app-edit-landscape',
  templateUrl: './edit-landscape.component.html',
  styleUrls: ['./edit-landscape.component.scss']
})
export class EditLandscapeComponent implements OnInit {
  title!: string;
  id!: string;
  formsSchema = FormsSchema;
  initData!: any;
  data: any = {
    name: '',
    content: '',
    image: ''
  };

  // 判斷表單值是否改變
  isValueChange = false;

  // 資料傳送中
  isSending = false;
  @ViewChild('form', { static: false }) form!: NgForm;

  constructor(
    private titleServer: Title,
    private route: ActivatedRoute,
    private router: Router,
    private landscapeService: LandscapeService,
    private swalDefaultService: SwalDefaultService,
    private spinner: NgxSpinnerService
  ) {
    swalToast = this.swalDefaultService.toastDefault;
  }

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      this.id = id;
      this.title = `${this.id ? '編輯' : '新增'}景點`;

      if (this.id) {
        this.landscapeService.getLandscape(+this.id).subscribe(res => {
          if (res) {
            this.data.name = res.name;
            this.data.content = res.content;
            this.data.image = res.image;
            this.initData = { ...this.data };
            this.setTitle();
            this.spinner.hide();
          }
        });
      } else {
        this.setTitle();
        this.spinner.hide();
      }

      // 監聽 input 值的改變
      setTimeout(() => {
        if (this.form.valueChanges) {
          this.form.valueChanges.subscribe(valueObj => {
            // 監聽 input 值的改變
            this.isValueChange = false;
            for (const value in valueObj) {
              if (!this.initData || this.initData && valueObj[value] !== this.initData[value]) {
                this.isValueChange = true;
                return;
              }
            }
          });
        }
      }, 1000);
    });
  }

  setTitle() {
    const name = this.data.name ? ` - ${this.data.name}` : '';
    this.titleServer.setTitle(`【後台管理】${this.title}${name} | ${Company.name}`);
  }

  onSubmit() {
    this.spinner.show();
    this.isSending = true;
    // 新增
    if (!this.id) {
      this.landscapeService.addLandscape(this.data).subscribe(res => {
        this.setSwalToast(res.id ? true : false);
      });
    } else {
      // 編輯
      this.landscapeService.editLandscape(+this.id, this.data).subscribe(res => {
        this.setSwalToast(res.id ? true : false);
      });
    }
  }

  resetForm() {
    if (this.id) {
      this.data = { ...this.initData };
    } else {
      this.form.resetForm();
    }
  }

  setSwalToast(success: boolean) {
    this.spinner.hide();
    swalToast.fire({
      icon: success ? 'success' : 'error',
      title: `${this.title}${success ? '成功' : '失敗'}`,
    }).then((res: any) => {
      if (success) { this.router.navigate(['/scadmin/landscapes']) }
    });;
  }
}
