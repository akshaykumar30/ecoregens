import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-project-masonry',
  templateUrl: './page-project-masonry.component.html',
  styleUrls: ['./page-project-masonry.component.css']
})
export class PageProjectMasonryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    background: "assets/images/banner/8.jpg",
    title: "Project Masonry",
    crumb: "Project Masonry"
  }

  projects = [
    {
      category: "cat-1",
      image: "assets/images/gallery/thumb/pic1.jpg",
      title: "Metal Industry",
      description: "Committed to delivering high quality projects and innovate business."
    },
    {
      category: "cat-2",
      image: "assets/images/gallery/pic1.jpg",
      title: "Alternative Energy",
      description: "High Performance Services For Multiple Insdustries And Technologies!"
    },
    {
      category: "cat-3",
      image: "assets/images/gallery/thumb/pic4.jpg",
      title: "Areb Oil Rigs",
      description: "Committed to delivering high quality projects and innovate business."
    },
    {
      category: "cat-4",
      image: "assets/images/gallery/thumb/pic3.jpg",
      title: "Gothia Mining Factory",
      description: "High Performance Services For Multiple Insdustries And Technologies!"
    },
    {
      category: "cat-5",
      image: "assets/images/gallery/pic5.jpg",
      title: "Warehouse Industry",
      description: "Committed to delivering high quality projects and innovate business."
    },
    {
      category: "cat-4",
      image: "assets/images/gallery/thumb/pic6.jpg",
      title: "Machine Engineering",
      description: "High Performance Services For Multiple Insdustries And Technologies!"
    },
    {
      category: "cat-3",
      image: "assets/images/gallery/thumb/pic7.jpg",
      title: "Gear Manufacturing",
      description: "Committed to delivering high quality projects and innovate business."
    },
    {
      category: "cat-2",
      image: "assets/images/gallery/pic4.jpg",
      title: "Oil Pipeline Project",
      description: "High Performance Services For Multiple Insdustries And Technologies!"
    },
    {
      category: "cat-1",
      image: "assets/images/gallery/pic2.jpg",
      title: "Industry Complex",
      description: "Committed to delivering high quality projects and innovate business."
    }
  ]
}
