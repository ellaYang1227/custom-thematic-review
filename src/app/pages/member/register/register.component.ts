import { Component, OnInit } from '@angular/core';
import { FormsSchema } from '@data/forms-schema';
import { MemberService } from '@services/member.service';
import { SwalDefaultService } from '@services/swal-default.service';

let swalToast: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  title = '註冊';
  formsSchema = FormsSchema;
  data: any = {
    email: '',
    password: '',
    name: ''
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
    this.memberService.register(this.data).subscribe(res => {
      if (res) {
        swalToast.fire({
          icon: 'error',
          title: `${this.title}失敗`,
          text: res === 'Email already exists' ? 'Email 信箱已存在' : res
        });
      }
    });
  }
}
