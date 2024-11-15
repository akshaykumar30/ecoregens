import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-project-carousel',
  templateUrl: './page-project-carousel.component.html',
  styleUrls: ['./page-project-carousel.component.css']
})
export class PageProjectCarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    background: "assets/images/banner/8.jpg",
    title: "Project Carousel",
    crumb: "Project Carousel"
  }

  projects1 = [
    {
      image: "assets/images/gallery/pic1.jpg",
      title: "Metal Industry",
      description: "Committed to delivering high quality projects and innovate business solutions.high Performance Services For Multiple Insdustries"
    },
    {
      image: "assets/images/gallery/pic2.jpg",
      title: "Alternative Energy",
      description: "Committed to delivering high quality projects and innovate business solutions.high Performance Services For Multiple Insdustries"
    },
    {
      image: "assets/images/gallery/pic3.jpg",
      title: "Areb Oil Rigs",
      description: "Committed to delivering high quality projects and innovate business solutions.high Performance Services For Multiple Insdustries"
    },
    {
      image: "assets/images/gallery/pic4.jpg",
      title: "Gothia Mining Factory",
      description: "Committed to delivering high quality projects and innovate business solutions.high Performance Services For Multiple Insdustries"
    },
    {
      image: "assets/images/gallery/pic5.jpg",
      title: "Warehouse Industry",
      description: "Committed to delivering high quality projects and innovate business solutions.high Performance Services For Multiple Insdustries"
    }
  ]

  projects2 = {
    title: "The Best Industry services",
    subtitle: "High Performance Services For Multiple Insdustries And Technologies!",
    bgImage: "assets/images/background/bg-3.jpg",
    cases: [
      {
        image: "assets/images/gallery/thumb/pic1.jpg",
        title: "Metal Industry",
        subtitle: "High Performance Services For Multiple Insdustries And Technologies!"
      },
      {
        image: "assets/images/gallery/thumb/pic2.jpg",
        title: "Alternative Energy",
        subtitle: "Committed to delivering high quality projects and innovate business."
      },
      {
        image: "assets/images/gallery/thumb/pic3.jpg",
        title: "Areb Oil Rigs",
        subtitle: "High Performance Services For Multiple Insdustries And Technologies!"
      },
      {
        image: "assets/images/gallery/thumb/pic4.jpg",
        title: "Gothia Mining Factory",
        subtitle: "Committed to delivering high quality projects and innovate business."
      },
      {
        image: "assets/images/gallery/thumb/pic5.jpg",
        title: "Warehouse Industry",
        subtitle: "High Performance Services For Multiple Insdustries And Technologies!"
      },
      {
        image: "assets/images/gallery/thumb/pic6.jpg",
        title: "Machine Engineering",
        subtitle: "Committed to delivering high quality projects and innovate business."
      }
    ]
  }

}
