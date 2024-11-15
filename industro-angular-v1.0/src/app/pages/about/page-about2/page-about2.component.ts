import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-about2',
  templateUrl: './page-about2.component.html',
  styleUrls: ['./page-about2.component.css']
})
export class PageAbout2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    background: "assets/images/banner/3.jpg",
    title: "About Us",
    crumb: "About 2"
  }

  about = {
    title: "Welcome to industro",
    subtitle: "We Are Here to Increase Your Knowledge With Experience",
    image: "assets/images/colarge/s1.jpg",
    since: "2015",
    description: "Progressively maintain extensive infomediaries via extensible nich. Capitalize on low hanging fruit. a ballpark value added is activity to beta test. Override the digital divide with additional click throughs from fruit to identify a ballpark value added.",
    sign: "assets/images/sign.png",
    authorized: "Brayden",
    post: "CEO & Founder",
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

  vision = {
    title: "Vision & Mission Statement",
    subtitle: "Serving Impressive List Of Long Term Clients!",
    description: "Our worldwide presence ensures timeliness, cost efficiency and compliance adherence required to ensure your timelines are met. Serving with experience aNd expertise in multiple industries, as one of the World's leading Corporation!",
    videoLink: "https://www.youtube.com/watch?v=fgExvIUYg5w",
    quote: "Many of Our SELF registered employees are requested an main preferred temporary staff when all service",
    quoteBy: "Farnandoz Biki, CEO"
  }

  counter = {
    title: "All Solutions",
    subtitle: "Get A Solution For All Transportation",
    bgImage: "assets/images/background/bg-2.jpg",
    opacity: "opacity-09",
    figures: [
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
    ]
  }

  clients = {
    bgcolor: "bg-gray",
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

  projects = {
    title: "Explore Recent Work",
    subtitle: "We've Done Lot's Projects Let's Check Some Here",
    bgImage: "assets/images/background/bg-7.jpg",
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

  selfIntro = {
    image: "assets/images/self-pic.png",
    bgImage: "assets/images/background/bg-6.jpg",
    bgClass: "bg-gray",
    bgCover: "",
    opacity: "opacity-09",
    imageClass: "self-intro-pic-block"
  }
}
