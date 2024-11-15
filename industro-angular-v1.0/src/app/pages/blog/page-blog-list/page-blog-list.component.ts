import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-blog-list',
  templateUrl: './page-blog-list.component.html',
  styleUrls: ['./page-blog-list.component.css']
})
export class PageBlogListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    background: "assets/images/banner/2.jpg",
    title: "Blog List",
    crumb: "Blog List"
  }

  blogs = {
    withoutImage: {
      field: "Materials",
      date: "July 28, 2021",
      comments: "24",
      title: "Technology is important for your business, you use technology makes"
    },
    others: [
      {
        image: "assets/images/blog/default/thum1.jpg",
        field: "Technology",
        date: "July 28, 2021",
        comments: "24",
        title: "Present you with examples of 3 posts from authority websites click"
      },
      {
        image: "assets/images/blog/default/thum2.jpg",
        field: "Manufacturing",
        date: "July 28, 2021",
        comments: "24",
        title: "Explain to you why they work and what makes people click them"
      },
      {
        image: "assets/images/blog/default/thum3.jpg",
        field: "Materials",
        date: "July 28, 2021",
        comments: "24",
        title: "Technology is important for your business, you use technology makes"
      },
      {
        image: "assets/images/blog/default/thum4.jpg",
        field: "Technology",
        date: "July 28, 2021",
        comments: "24",
        title: "Present you with examples of 3 posts from authority websites click"
      },
      {
        image: "assets/images/blog/default/thum5.jpg",
        field: "Manufacturing",
        date: "July 28, 2021",
        comments: "24",
        title: "Explain to you why they work and what makes people click them"
      },
      {
        image: "assets/images/blog/default/thum6.jpg",
        field: "Materials",
        date: "July 28, 2021",
        comments: "24",
        title: "Technology is important for your business, you use technology makes"
      },
      {
        image: "assets/images/blog/default/thum7.jpg",
        field: "Technology",
        date: "July 28, 2021",
        comments: "24",
        title: "Present you with examples of 3 posts from authority websites click"
      }
    ]
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
