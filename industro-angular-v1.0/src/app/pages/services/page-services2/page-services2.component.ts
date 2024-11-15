import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-services2',
  templateUrl: './page-services2.component.html',
  styleUrls: ['./page-services2.component.css']
})
export class PageServices2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    background: "assets/images/banner/2.jpg",
    title: "Services 2",
    crumb: "Services 2"
  }

  whatwedo = {
    title: "What We do",
    subtitle: "Providing Full Range of High Services Solution Worldwide",
    description: "Progressively maintain extensive infomediaries via extensible niches. Capitalize on low hanging fruit to identify a ballpark value added is activity to beta test. Override the igital divide",
    image: "assets/images/what-we/pic1.jpg",
    experience: {
      title: "Team Working Dedicatedly",
      description: "We have 26+ years of experience with providing wide area of specialty services works listed below"
    },
    work: [
      {
        icon: "flaticon-robotic-arm",
        title: "A Full Services",
        description: "We are Providing different services in this sector to wide area of world"
      },
      {
        icon: "flaticon-repair",
        title: "All Maintenance",
        description: "We are Prous to Protect your organization with our award-winning products"
      }
    ]
  }

  services = {
    title: "Latest Articles Updated Daily",
    subtitle: "We Are Here To Learn You More From Blog",
    services: [
      {
        title1: "Oil & Gas Engineering",
        title2: "",
        description: "Progressively maintain extensive infomediaries via extensible nich. Capitalize on low hanging fruit.",
        image: "assets/images/services/1.jpg",
        pageLink: "s-oilgas"
      },
      {
        title1: "Mechanical Engineering",
        title2: "",
        description: "Progressively maintain extensive infomediaries via extensible nich. Capitalize on low hanging fruit.",
        image: "assets/images/services/2.jpg",
        pageLink: "s-mechanical"
      },
      {
        title1: "Automotive Manufacturing",
        title2: "",
        description: "Progressively maintain extensive infomediaries via extensible nich. Capitalize on low hanging fruit.",
        image: "assets/images/services/3.jpg",
        pageLink: "s-automotive"
      },
      {
        title1: "Chemical Research",
        title2: "",
        description: "Progressively maintain extensive infomediaries via extensible nich. Capitalize on low hanging fruit.",
        image: "assets/images/services/4.jpg",
        pageLink: "s-chemical"
      },
      {
        title1: "Agricultural Automation",
        title2: "",
        description: "Progressively maintain extensive infomediaries via extensible nich. Capitalize on low hanging fruit.",
        image: "assets/images/services/5.jpg",
        pageLink: "s-agricultural"
      },
      {
        title1: "Civil Engineering",
        title2: "",
        description: "Progressively maintain extensive infomediaries via extensible nich. Capitalize on low hanging fruit.",
        image: "assets/images/services/6.jpg",
        pageLink: "s-civil"
      }
    ]
  }

  video = {
    title: "All Solutions",
    subtitle: "Get A Solution For All Industries",
    bgImage: "assets/images/background/bg-2.jpg",
    bgOpacity: "09",
    bgColor: "bg-gray",
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
      }
    ],
    description: {
      title: "The Best Solution For all industries",
      subtitle: "Seving an impressive list of long-term clients with experience and expertise in industries.",
      quote: "Many of Our SELF registered employees are requested an main preferred temporary staff when all service",
      quoteby: "Farnandoz Biki, CEO"
    }
  }

  testimonials = {
    title: "What our client say",
    subtitle: "Happy WIth Customers & Clients",
    bgImage: "assets/images/background/bg-map.png",
    bgClass: "bg-center bg-white",
    quotes: [
      {
        quote: "This is not just another nail salon! These ladies are super talented! My nails have never looked/felt more amazing!! the environment here is so happy and cheery!",
        image: "assets/images/testimonials/pic1.jpg",
        by: "Malcolm Franzcrip",
        post: "Contractor"
      },
      {
        quote: "This is not just another nail salon! These ladies are super talented! My nails have never looked/felt more amazing!! the environment here is so happy and cheery!",
        image: "assets/images/testimonials/pic2.jpg",
        by: "Malcolm Franzcrip",
        post: "Contractor"
      },
      {
        quote: "This is not just another nail salon! These ladies are super talented! My nails have never looked/felt more amazing!! the environment here is so happy and cheery!",
        image: "assets/images/testimonials/pic3.jpg",
        by: "Malcolm Franzcrip",
        post: "Contractor"
      },
      {
        quote: "This is not just another nail salon! These ladies are super talented! My nails have never looked/felt more amazing!! the environment here is so happy and cheery!",
        image: "assets/images/testimonials/pic4.jpg",
        by: "Malcolm Franzcrip",
        post: "Contractor"
      }
    ]
  }
}
