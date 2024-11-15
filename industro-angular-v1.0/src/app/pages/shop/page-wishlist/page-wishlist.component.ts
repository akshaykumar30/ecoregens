import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-wishlist',
  templateUrl: './page-wishlist.component.html',
  styleUrls: ['./page-wishlist.component.css']
})
export class PageWishlistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    background: "assets/images/banner/5.jpg",
    title: "Wishlist",
    crumb: "Wishlist"
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
