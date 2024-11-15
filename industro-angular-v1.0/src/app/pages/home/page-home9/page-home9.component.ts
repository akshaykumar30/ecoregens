import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-home9',
  templateUrl: './page-home9.component.html',
  styleUrls: ['./page-home9.component.css']
})
export class PageHome9Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  about = {
    title: "About Industroz",
    subtitle: "We Provide top industrial Services.",
    description1: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    description2: "By injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of you need to be sure there embarrassing.",
    specifications: [
      {
        icon: "flaticon-robotic-arm",
        title: "A Full Services",
        subtitle: "Train with the best experts in body building field."
      },
      {
        icon: "flaticon-repair",
        title: "All Maintenance",
        subtitle: "Our personal trainers will help you find a perfect."
      }
    ],
    image: "assets/images/ui-9/intro-pic.jpg",
    experience: "25+"
  }

  services = {
    title: "The Best Industry Services",
    subtitle: "High Performance Services For Multiple Insdustries!",
    services: [
      {
        icon: "flaticon-oil",
        count: "01",
        title: "Oil & Gas Engineering",
        description: "You can dream, create, design, and build the most wonderful place in the world. But it requires people."
      },
      {
        icon: "flaticon-conveyor",
        count: "02",
        title: "Mechanical Engineering",
        description: "You can dream, create, design, and build the most wonderful place in the world. But it requires people."
      },
      {
        icon: "flaticon-robotic-arm",
        count: "03",
        title: "Automotive Manufacturing",
        description: "You can dream, create, design, and build the most wonderful place in the world. But it requires people."
      },
      {
        icon: "flaticon-helmet",
        count: "04",
        title: "Civil Engineering",
        description: "You can dream, create, design, and build the most wonderful place in the world. But it requires people."
      },
      {
        icon: "flaticon-industry",
        count: "05",
        title: "Chemical Research",
        description: "You can dream, create, design, and build the most wonderful place in the world. But it requires people."
      },
      {
        icon: "flaticon-scythe",
        count: "06",
        title: "Agricultural Automation",
        description: "You can dream, create, design, and build the most wonderful place in the world. But it requires people."
      }
    ]
  }

  quality = {
    title: "About Quality",
    subtitle: "We're about Quality and Trust.",
    counters: [
      {
        count: "35",
        title: "Projects Completed"
      },
      {
        count: "1435",
        title: "Work Employed"
      },
      {
        count: "750",
        title: "Work facilities"
      },
      {
        count: "26",
        title: "Winning Awards"
      }
    ],
    description: "Many of our Self registered employees are requested an main preferred temporary staff when all service",
    videoLink: "https://www.youtube.com/watch?v=c1XNqw2gSbU"
  }

  team = {
    title: "Our Experts",
    subtitle: "We will serve you with the best of our capacity by expert team",
    members: [
      {
        speciality: "Photographer",
        image: "assets/images/team/pic1.jpg",
        name: "Staephan Humbert"
      },
      {
        speciality: "Creative Director",
        image: "assets/images/team/pic2.jpg",
        name: "Leo Simon"
      },
      {
        speciality: "Photographer",
        image: "assets/images/team/pic3.jpg",
        name: "John Casey"
      }
    ]
  }

  projects = {
    title: "Our Recent Work",
    subtitle: "Recently Completed Projects",
    projects: [
      {
        image: "assets/images/ui-9/project/1.jpg",
        title1: "Energy",
        title2: "Compliance System",
        author: "someone",
        subtitle: "Regulatory Compliance System"
      },
      {
        image: "assets/images/ui-9/project/2.jpg",
        title1: "industry",
        title2: "Florida Chemical Factories",
        author: "someone",
        subtitle: "Florida Chemical Factories"
      },
      {
        image: "assets/images/ui-9/project/3.jpg",
        title1: "Construction",
        title2: "Flyover Construction",
        author: "someone",
        subtitle: "Florida Chemical Factories"
      },
      {
        image: "assets/images/ui-9/project/4.jpg",
        title1: "Oil & Gas",
        title2: "Documents Electronics Data",
        author: "someone",
        subtitle: "Documents Electronics Data"
      },
      {
        image: "assets/images/ui-9/project/5.jpg",
        title1: "Automobile",
        title2: "Automotive Manufactureing",
        author: "someone",
        subtitle: "Automotive Manufactureing"
      },
      {
        image: "assets/images/ui-9/project/6.jpg",
        title1: "Industrial",
        title2: "California Power Point",
        author: "someone",
        subtitle: "California Power Point"
      },
      {
        image: "assets/images/ui-9/project/7.jpg",
        title1: "Industrial",
        title2: "California Power Point",
        author: "someone",
        subtitle: "California Power Point"
      },
      {
        image: "assets/images/ui-9/project/8.jpg",
        title1: "Industrial",
        title2: "California Power Point",
        author: "someone",
        subtitle: "California Power Point"
      }
    ]
  }

  blogs = {
    title: "Latest Articles Updated Daily",
    subtitle: "We Are Here To Learn You More From Blog",
    articles: [
      {
        date: "15",
        mmyy: "Jan 2021",
        author: "Admin",
        comments: "2",
        title: "Everyone wants to make a profit from their business, for that all of them"
      },
      {
        date: "20",
        mmyy: "Jan 2021",
        author: "Admin",
        comments: "2",
        title: "Build the industry and manufacturing the best quality of products"
      }
    ]
  }

  clients = {
    bgcolor: "bg-white",
    clients: [
      "assets/images/client-logo/w1.png",
      "assets/images/client-logo/w2.png",
      "assets/images/client-logo/w3.png",
      "assets/images/client-logo/w4.png",
      "assets/images/client-logo/w5.png",
      "assets/images/client-logo/w6.png",
      "assets/images/client-logo/w1.png",
      "assets/images/client-logo/w2.png",
      "assets/images/client-logo/w3.png",
      "assets/images/client-logo/w4.png",
      "assets/images/client-logo/w5.png",
      "assets/images/client-logo/w6.png",
      "assets/images/client-logo/w1.png",
      "assets/images/client-logo/w2.png",
      "assets/images/client-logo/w3.png",
      "assets/images/client-logo/w4.png",
      "assets/images/client-logo/w5.png",
      "assets/images/client-logo/w6.png"
    ]
  }
}
