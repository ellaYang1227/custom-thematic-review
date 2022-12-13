import { Component, OnInit } from '@angular/core';
import { Company } from '@data/company';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  name = Company.name;

  constructor() { }

  ngOnInit(): void {
  }

}
