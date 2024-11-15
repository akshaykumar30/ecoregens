import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-services1',
  templateUrl: './page-services1.component.html',
  styleUrls: ['./page-services1.component.css']
})
export class PageServices1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    background: "assets/images/banner/2.jpg",
    title: "Services",
    crumb: "Services"
  }

  services = {
    title: "The Best Industry services",
    subtitle: "High Performance Services For Multiple Insdustries And Technologies!",
    description: "Progressively maintain extensive infomediaries via extensible niches. Capitalize on low hanging fruit to identify a ballpark value added is activity to beta test. Override the igital divide with additional click throughs from fruit to identify a ballpark value added.",
    services: [
      {
        title: "Oil & Gas Engineering",
        description: "Ecoregen has become a leader in developing, designing, and manufacturing state-of-the-art oil regeneration solutions that are both effective and environmentally responsible.",
        icon: "flaticon-industry",
        serial: "01",
        pagelink: "s-oilgas"
      },
      {
        title: "Mechanical Engineering",
        description: "At Ecoregen, we understand the critical role that clean, high-quality transformer oil plays in maintaining the performance and longevity of transformers.",
        icon: "flaticon-conveyor",
        serial: "02",
        pagelink: "s-mechanical"
      },
      {
        title: "Regeneration Systems",
        description: "Our cutting-edge regeneration systems are meticulously engineered to remove contaminants, moisture, and acidity, restoring the oil to optimal conditions and extending transformer lifespan.",
        icon: "flaticon-robotic-arm",
        serial: "03",
        pagelink: "s-automotive"
      },
      {
        title: "Corrosive sulfur removal",
        description: "EOIL transformer oil regeneration with corrosive sulfur removal removes corrosive sulfur compounds from transformer oils. Sulfur, as well as elemental (free) sulfur (classified as S8), is removed so that treated transformer oil meets the IEC 62697-1 (DBDS) and IEC 62535 standards.",
        icon: "flaticon-robotic-arm",
        serial: "03",
        pagelink: "s-automotive"
      },
      {
        title: "Transformer oil treatment systems",
        description: "FILOIL 24000 FILOIL 12000 FILOIL 9000 FILOIL 6000 Our top of the line model with great performance suited for large and mid-size power transformers",
        icon: "flaticon-robotic-arm",
        serial: "03",
        pagelink: "s-automotive"
      }
      // {
      //   title: "Chemical Research",
      //   description: "Progressively maintain extensive intermediaries via extensible is nich. Capitalize on low hanging machine and tools.",
      //   icon: "flaticon-oil",
      //   serial: "04",
      //   pagelink: "s-chemical"
      // },
      // {
      //   title: "Agricultural Automation",
      //   description: "Progressively maintain extensive intermediaries via extensible is nich. Capitalize on low hanging machine and tools.",
      //   icon: "flaticon-scythe",
      //   serial: "05",
      //   pagelink: "s-agricultural"
      // },
      // {
      //   title: "Civil Engineering",
      //   description: "Progressively maintain extensive intermediaries via extensible is nich. Capitalize on low hanging machine and tools.",
      //   icon: "flaticon-helmet",
      //   serial: "06",
      //   pagelink: "s-civil"
      // }
    ]
  }
  
  plans = [
    {
      price: "29",
      plan: "Basic",
      description: "Tempo sit amet ipsum dolor, consecter adipisi cing elit, lorem do incididu eiusmod tempor dolor"
    },
    {
      price: "49",
      plan: "Standard",
      description: "Tempo sit amet ipsum dolor, consecter adipisi cing elit, lorem do incididu eiusmod tempor dolor"
    },
    {
      price: "99",
      plan: "Advanced",
      description: "Tempo sit amet ipsum dolor, consecter adipisi cing elit, lorem do incididu eiusmod tempor dolor"
    }
  ]

  testimonials = {
    title: "What our client say",
    subtitle: "Happy WIth Customers & Clients",
    bgImage: "assets/images/background/bg-map.png",
    bgClass: "bg-center bg-gray",
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

  vision = {
    title: "Vision & Mission Statement",
    subtitle: "Serving Impressive List Of Long Term Clients!",
    description: "Our worldwide presence ensures timeliness, cost efficiency and compliance adherence required to ensure your timelines are met. Serving with experience aNd expertise in multiple industries, as one of the World's leading Corporation!",
    videoLink: "https://www.youtube.com/watch?v=fgExvIUYg5w",
    quote: "Many of Our SELF registered employees are requested an main preferred temporary staff when all service",
    quoteBy: "Farnandoz Biki, CEO"
  }
}
