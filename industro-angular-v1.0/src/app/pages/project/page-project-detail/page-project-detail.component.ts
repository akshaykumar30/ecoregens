import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-project-detail',
  templateUrl: './page-project-detail.component.html',
  styleUrls: ['./page-project-detail.component.css']
})
export class PageProjectDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    background: "assets/images/banner/8.jpg",
    title: "Project Detail",
    crumb: "Project Detail"
  }

  images = [
    "assets/images/gallery/pic1.jpg",
    "assets/images/gallery/pic2.jpg",
    "assets/images/gallery/pic3.jpg",
    "assets/images/gallery/pic4.jpg"
  ]

  details = {
    project: "Refinery Industrial",
    category: "Business, Industrial",
    time: "2 Month",
    status: "Good",
    client: "Matthew Stone"
  }
}
