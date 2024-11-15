import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-blog-post',
  templateUrl: './page-blog-post.component.html',
  styleUrls: ['./page-blog-post.component.css']
})
export class PageBlogPostComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    background: "assets/images/banner/5.jpg",
    title: "Blog Single",
    crumb: "Blog Single"
  }

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
    "December 2020"
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
}
