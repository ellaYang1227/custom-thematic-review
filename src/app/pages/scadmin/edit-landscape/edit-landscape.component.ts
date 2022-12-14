import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
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
  data: any = {
    title: '',
    content: '',
    image: ''
  };

  constructor(
    private titleServer: Title,
    private route: ActivatedRoute,
    private landscapeService: LandscapeService,
    private swalDefaultService: SwalDefaultService,
    private spinner: NgxSpinnerService
  ) {
    swalToast = this.swalDefaultService.toastDefault;
  }

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      console.log(id)
      this.id = id;
      this.title = `${this.id ? '編輯' : '新增'}景點`;
      this.titleServer.setTitle(`【後台管理】${this.title} | ${Company.name}`);
      this.spinner.hide();
    });
  }

  onSubmit() {
    console.log(this.data)
    // 新增
    if (!this.id) {
      this.landscapeService.addLandscape(this.data).subscribe(res => {
        console.log(res)
        this.setSwalToast(res);
      });
    } else {
      // 編輯
    }
  }

  setSwalToast(res: any) {
    console.log(res)
    // swalToast.fire({
    //   icon: '',
    //   title: `${this.title}失敗`,
    //   text: res === 'Email already exists' ? 'Email 信箱已存在' : res
    // });
  }
}
