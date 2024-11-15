import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-home2',
  templateUrl: './page-home2.component.html',
  styleUrls: ['./page-home2.component.css']
})
export class PageHome2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  specifications = [
    {
      title: "Oil & Gas Engineering",
      description: "Progressively maintain extensive infomediaries via extensible nich. Capitalize on low hanging fruit.",
      icon: "flaticon-industry",
      serial: "01",
      pagelink: "contact1"
    },
    {
      title: "Mechanical Engineering",
      description: "Progressively maintain extensive infomediaries via extensible nich. Capitalize on low hanging fruit.",
      icon: "flaticon-conveyor",
      serial: "02",
      pagelink: "s-mechanical"
    },
    {
      title: "Automotive Manufacturing",
      description: "Progressively maintain extensive infomediaries via extensible nich. Capitalize on low hanging fruit.",
      icon: "flaticon-robotic-arm",
      serial: "03",
      pagelink: "s-automotive"
    }
  ]

  projects = {
    title: "Explore Recent Work",
    subtitle: "We've Done Lot's Projects Let's Check Some Here",
    bgImage: "assets/images/background/bg-5.jpg",
    projects: [
      {
        category: "cat-1",
        image: "assets/images/project/square/1.jpg",
        title: "Oil & Gas",
        pagelink: "s-oilgas"
      },
      {
        category: "cat-2",
        image: "assets/images/project/square/2.jpg",
        title: "Automotive Manufacturing",
        pagelink: "s-automotive"
      },
      {
        category: "cat-2",
        image: "assets/images/project/square/3.jpg",
        title: "Construction",
        pagelink: "s-civil"
      },
      {
        category: "cat-4",
        image: "assets/images/project/square/4.jpg",
        title: "Industrial",
        pagelink: "s-mechanical"
      },
      {
        category: "cat-5",
        image: "assets/images/project/square/5.jpg",
        title: "Agriculture",
        pagelink: "s-agricultural"
      },
      {
        category: "cat-3",
        image: "assets/images/project/square/6.jpg",
        title: "Chemical",
        pagelink: "s-chemical"
      },
      {
        category: "cat-1",
        image: "assets/images/project/square/7.jpg",
        title: "Industrial",
        pagelink: "s-mechanical"
      }
    ]
  }

  about = {
    title: "Welcome to industro",
    subtitle: "We Are Here to Increase Your Knowledge With Experience",
    image1: "assets/images/colarge/s2.jpg",
    image2: "assets/images/colarge/s1.jpg",
    since: "2015",
    description: "Progressively maintain extensive infomediaries via extensible nich. Capitalize on low hanging fruit. a ballpark value added is activity to beta test. Override the digital divide with additional click throughs from fruit to identify a ballpark value added.",
    services: [
      {
        value: "Quality Control System , 100% Satisfaction Guarantee"
      },
      {
        value: "Unrivalled Workmanship, Professional and Qualified"
      },
      {
        value: "Environmental Sensitivity, Personalised Solutions"
      }
    ]
  }

  video = {
    title: "All Solutions",
    subtitle: "Get A Solution For All Industries",
    videolink: "https://www.youtube.com/watch?v=fgExvIUYg5w",
    solutions: [
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
        count: "36",
        title: "Winning Awards"
      }
    ],
    description: {
      title: "The Best Solution For all industries",
      subtitle: "Seving an impressive list of long-term clients with experience and expertise in industries.",
      quote: "Many of Our SELF registered employees are requested an main preferred temporary staff when all service",
      quoteby: "Farnandoz Biki, CEO"
    }
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

  testimonials = {
    title: "What our client say",
    subtitle: "Happy WIth Customers & Clients",
    quotesTitle: "Testimonial",
    quotes: [
      {
        image: "assets/images/testimonials/pic1.jpg",
        quote: "This is not just another nail salon! These ladies are super talented! My nails have never looked/felt more amazing!! the environment here is so happy and cheery!",
        name: "Malcolm Franzcrip",
        post: "Contractor"
      },
      {
        image: "assets/images/testimonials/pic2.jpg",
        quote: "This is not just another nail salon! These ladies are super talented! My nails have never looked/felt more amazing!! the environment here is so happy and cheery!",
        name: "Malcolm Franzcrip",
        post: "Contractor"
      },
      {
        image: "assets/images/testimonials/pic3.jpg",
        quote: "This is not just another nail salon! These ladies are super talented! My nails have never looked/felt more amazing!! the environment here is so happy and cheery!",
        name: "Malcolm Franzcrip",
        post: "Contractor"
      },
      {
        image: "assets/images/testimonials/pic4.jpg",
        quote: "This is not just another nail salon! These ladies are super talented! My nails have never looked/felt more amazing!! the environment here is so happy and cheery!",
        name: "Malcolm Franzcrip",
        post: "Contractor"
      }
    ]
  }
  
  team = {
    title: "Our Experts",
    subtitle: "We will serve you with the best of our capacity by expert team",
    bgImage: "assets/images/background/bg-map.png",
    members: [
      {
        image: "assets/images/team/pic1.jpg",
        name: "Malcolm Franzcrip",
        post: "Contractor"
      },
      {
        image: "assets/images/team/pic2.jpg",
        name: "Froster Collings",
        post: "Contractor"
      },
      {
        image: "assets/images/team/pic3.jpg",
        name: "Melena Marshall",
        post: "Contractor"
      }
    ]
  }

  blogs = {
    title: "Latest Articles Updated Daily",
    subtitle: "We Are Here To Learn You More From Blog",
    featured: {
      image: "assets/images/blog/default/thum1.jpg",
      field: "Materials",
      date: "July 28, 2021",
      comments: "24",
      title: "Technology is important for your business, you use technology makes"
    },
    others: [
      {
        field: "Materials",
        date: "July 28, 2021",
        comments: "24",
        title: "Explain to you why they work and what makes people click them"
      },
      {
        field: "Oil & Gas",
        date: "July 28, 2021",
        comments: "24",
        title: "Explain to you why they work and what makes people click them"
      },
      {
        field: "Chemical",
        date: "July 28, 2021",
        comments: "24",
        title: "Explain to you why they work and what makes people click them"
      }
    ]
  }

  selfIntro = {
    image: "assets/images/self-pic.png",
    bgImage: "assets/images/background/bg-6.jpg",
    bgClass: "bg-gray",
    bgCover: "",
    opacity: "opacity-09",
    imageClass: "self-intro-pic-block"
  }
}
