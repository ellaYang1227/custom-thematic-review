import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-scadmin',
  templateUrl: './scadmin.component.html',
  styleUrls: ['./scadmin.component.scss']
})
export class ScadminComponent implements OnInit {

  constructor(
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.spinner.hide();
  }

}
