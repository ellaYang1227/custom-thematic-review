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
    this.memberService.login(this.data).subscribe(res => {
      if (res && !res.success) {
        let text = res;
        if (res === 'Cannot find user') {
          text = '找不到此用戶';
        } else if (res === 'Incorrect password' || res === 'Password is too short') {
          text = '密碼錯誤';
        }

        swalToast.fire({
          icon: 'error',
          title: `${this.title}失敗`,
          text: text
        });
      }
    });
  }
}
