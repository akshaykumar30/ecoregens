import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-products',
  templateUrl: './page-products.component.html',
  styleUrls: ['./page-products.component.css']
})
export class PageProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    background: "assets/images/banner/5.jpg",
    title: "Shop",
    crumb: "Shop"
  }

  products = [
    {
      image: "assets/images/products/pic-1.jpg",
      title: "One Mechanical Tool",
      price: "49.00"
    },
    {
      image: "assets/images/products/pic-2.jpg",
      title: "Two Mechanical Tooll",
      price: "99.00"
    },
    {
      image: "assets/images/products/pic-3.jpg",
      title: "Three Mechanical Tool",
      price: "99.00"
    },
    {
      image: "assets/images/products/pic-4.jpg",
      title: "Four Mechanical Tool",
      price: "199.00"
    },
    {
      image: "assets/images/products/pic-5.jpg",
      title: "Five Mechanical Tool",
      price: "139.00"
    },
    {
      image: "assets/images/products/pic-6.jpg",
      title: "Six Mechanical Tool",
      price: "26.00"
    },
    {
      image: "assets/images/products/pic-7.jpg",
      title: "Seven Mechanical Tool",
      price: "86.00"
    },
    {
      image: "assets/images/products/pic-8.jpg",
      title: "Eight Mechanical Tool",
      price: "56.00"
    },
    {
      image: "assets/images/products/pic-9.jpg",
      title: "Nine Mechanical Tool",
      price: "99.00"
    }
  ]

  recent = [
    {
      image: "assets/images/blog/recent-blog/pic1.jpg",
      title: "Loft Office With Vintage Decor For Working",
      date: "26 Aug",
      comments: "58"
    },
    {
      image: "assets/images/blog/recent-blog/pic2.jpg",
      title: "South African farmers play chicken with tariffs",
      date: "18 Aug",
      comments: "35"
    },
    {
      image: "assets/images/blog/recent-blog/pic3.jpg",
      title: "Australia’s provider of industry-based research",
      date: "14 Aug",
      comments: "46"
    }
  ]

  archives = [
    "May 2021",
    "March 2021",
    "February 2021",
    "January 2021",
    "December 2020",
  ]

  categories = [
    {
      title: "Applin",
      badge: "28"
    },
    {
      title: "Makeup",
      badge: "05"
    },
    {
      title: "Business",
      badge: "24"
    },
    {
      title: "Government",
      badge: "15"
    },
    {
      title: "Investment",
      badge: "20"
    },
    {
      title: "Life",
      badge: "15"
    },
    {
      title: "Technique",
      badge: "20"
    }
  ]

  tags = [
    "Analytics",
    "Business ",
    "Consulting",    
    "Solutions ",
    "Development",
    "Stock",
    "Finance",
    "Innovation",
    "Investing",
    "Strategic",
    "Management",
    "Data ",
    "Planning ",
    "Firm",
    "Security",
    "Tax"
  ]

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
}
