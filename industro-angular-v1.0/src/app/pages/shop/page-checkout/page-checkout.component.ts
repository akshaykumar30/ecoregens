import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-checkout',
  templateUrl: './page-checkout.component.html',
  styleUrls: ['./page-checkout.component.css']
})
export class PageCheckoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    background: "assets/images/banner/5.jpg",
    title: "Checkout",
    crumb: "Checkout"
  }
}
