import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-product-details',
  templateUrl: './page-product-details.component.html',
  styleUrls: ['./page-product-details.component.css']
})
export class PageProductDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    background: "assets/images/banner/5.jpg",
    title: "Product Detail",
    crumb: "Product Detail"
  }

  featured = {
    title: "Our Best Products",
    subtitle: "Featured products",
    products: [
      {
        image: "assets/images/products/pic-1.jpg",
        title: "One Mechanical Tool",
        price: "2.00"
      },
      {
        image: "assets/images/products/pic-2.jpg",
        title: "Two Mechanical Tooll",
        price: "2.00"
      },
      {
        image: "assets/images/products/pic-3.jpg",
        title: "Three Mechanical Tool",
        price: "2.00"
      },
      {
        image: "assets/images/products/pic-4.jpg",
        title: "Four Mechanical Tool",
        price: "2.00"
      }
    ]
  }

  details = {
    images: [
      "assets/images/products/pic-1.jpg",
      "assets/images/products/pic-2.jpg",
      "assets/images/products/pic-3.jpg",
      "assets/images/products/pic-4.jpg",
      "assets/images/products/pic-5.jpg"
    ],
    imageThumbs: [
      "assets/images/products/thumb/pic1.jpg",
      "assets/images/products/thumb/pic2.jpg",
      "assets/images/products/thumb/pic3.jpg",
      "assets/images/products/thumb/pic4.jpg",
      "assets/images/products/thumb/pic5.jpg"
    ],
    title: "Plastic Helmate",
    price: "99.00",
    ratings: "4",
    description: "Hundreds of thousands a still more glorious nights around art table Nov 28, 2019  Uncategorized Preserve and cherish that pale blue dot are creatures of the cosmos light years Nov 27, 2019  Uncategorized Great turbulent clouds hearts of the stars stirred by starlight sky culture",
    sku: "N/A",
    categories: [
      "Clothing", "T-shirts"
    ]
  }

  reviews = [
    {
      image: "assets/images/testimonials/pic1.jpg",
      name: "Cobus Bester",
      date: "August 20, 2021",
      review: "Really happy with this print. The colors are great, and the paper quality is very good.",
      rating: "2"
    },
    {
      image: "assets/images/testimonials/pic2.jpg",
      name: "Cobus Bester",
      date: "August 12, 2021",
      review: "Really happy with this print. The colors are great, and the paper quality is very good.",
      rating: "3"
    },
    {
      image: "assets/images/testimonials/pic3.jpg",
      name: "Cobus Bester",
      date: "August 11, 2021",
      review: "Really happy with this print. The colors are great, and the paper quality is very good.",
      rating: "4"
    }
  ]
}
