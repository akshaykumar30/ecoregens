import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-blog-grid',
  templateUrl: './page-blog-grid.component.html',
  styleUrls: ['./page-blog-grid.component.css']
})
export class PageBlogGridComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    background: "assets/images/banner/1.jpg",
    title: "Blog Grid",
    crumb: "Blog Grid"
  }

  blogs = [
    {
      image: "assets/images/blog/default/portrait/1.jpg",
      field: "Materials",
      date: "July 28, 2021",
      comments: "24",
      title: "Technology is important for your business, you use technology makes"
    },
    {
      image: "assets/images/blog/default/portrait/2.jpg",
      field: "Technology",
      date: "July 28, 2021",
      comments: "24",
      title: "Present you with examples of 3 posts from authority websites click"
    },
    {
      image: "assets/images/blog/default/portrait/3.jpg",
      field: "Manufacturing",
      date: "July 28, 2021",
      comments: "24",
      title: "Explain to you why they work and what makes people click them"
    },
    {
      image: "assets/images/blog/default/portrait/4.jpg",
      field: "Materials",
      date: "July 28, 2021",
      comments: "24",
      title: "Technology is important for your business, you use technology makes"
    },
    {
      image: "assets/images/blog/default/portrait/5.jpg",
      field: "Technology",
      date: "July 28, 2021",
      comments: "24",
      title: "Present you with examples of 3 posts from authority websites click"
    },
    {
      image: "assets/images/blog/default/portrait/6.jpg",
      field: "Manufacturing",
      date: "July 28, 2021",
      comments: "24",
      title: "Explain to you why they work and what makes people click them"
    },
    {
      image: "assets/images/blog/default/portrait/7.jpg",
      field: "Materials",
      date: "July 28, 2021",
      comments: "24",
      title: "Technology is important for your business, you use technology makes"
    },
    {
      image: "assets/images/blog/default/portrait/8.jpg",
      field: "Technology",
      date: "July 28, 2021",
      comments: "24",
      title: "Present you with examples of 3 posts from authority websites click"
    },
    {
      image: "assets/images/blog/default/portrait/9.jpg",
      field: "Manufacturing",
      date: "July 28, 2021",
      comments: "24",
      title: "Explain to you why they work and what makes people click them"
    }
  ]
}
