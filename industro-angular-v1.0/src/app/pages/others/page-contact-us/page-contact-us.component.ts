import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-contact-us',
  templateUrl: './page-contact-us.component.html',
  styleUrls: ['./page-contact-us.component.css']
})
export class PageContactUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    background: "assets/images/banner/5.jpg",
    title: "Contact Us",
    crumb: "Contact Us"
  }
}
