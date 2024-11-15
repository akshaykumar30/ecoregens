import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-project-grid',
  templateUrl: './page-project-grid.component.html',
  styleUrls: ['./page-project-grid.component.css']
})
export class PageProjectGridComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    background: "assets/images/banner/5.jpg",
    title: "Project Grid",
    crumb: "Project Grid"
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
      image: "assets/images/gallery/thumb/pic2.jpg",
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
      image: "assets/images/gallery/thumb/pic5.jpg",
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
      image: "assets/images/gallery/thumb/pic8.jpg",
      title: "Oil Pipeline Project",
      description: "High Performance Services For Multiple Insdustries And Technologies!"
    },
    {
      category: "cat-1",
      image: "assets/images/gallery/thumb/pic9.jpg",
      title: "Industry Complex",
      description: "Committed to delivering high quality projects and innovate business."
    }
  ]
}
