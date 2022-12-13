import { Component, OnInit } from '@angular/core';
import { FormsSchema } from '@data/forms-schema';
import { MemberService } from '@services/member.service';
import { SwalDefaultService } from '@services/swal-default.service';

let swalToast: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  title = '登入';
  formsSchema = FormsSchema;
  data: any = {
    email: '',
    password: ''
  };

  constructor(
    private memberService: MemberService,
    private swalDefaultService: SwalDefaultService
  ) {
    swalToast = this.swalDefaultService.toastDefault;
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.data)
    this.memberService.login(this.data).subscribe(res => {
      if (res && !res.success) {
        swalToast.fire({
          icon: 'error',
          title: `${this.title}失敗`,
          text: res === 'Cannot find user' ? '找不到此用戶' : res
        });
      }
    });
  }
}
