import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-cart',
  templateUrl: './page-cart.component.html',
  styleUrls: ['./page-cart.component.css']
})
export class PageCartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    background: "assets/images/banner/6.jpg",
    title: "Cart",
    crumb: "Cart"
  }

  products = [
    {
      image: "assets/images/cart/thumb/pic2.jpg",
      name: "Prduct Item 1",
      price: "35.00",
      status: "In Stock",
      total: "Add to Cart"
    },
    {
      image: "assets/images/cart/thumb/pic3.jpg",
      name: "Prduct Item 2",
      price: "15.00",
      status: "In Stock",
      total: "Add to Cart"
    }
  ]
}
