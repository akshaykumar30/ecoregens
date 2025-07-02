import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-about1',
  templateUrl: './page-about1.component.html',
  styleUrls: ['./page-about1.component.css']
})
export class PageAbout1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    background: "assets/images/banner/3.jpg",
    title: "About Us",
    crumb: "About"
  }

  about = {
    title: "Welcome to Ecoregen",
    subtitle: "",
    image1: "assets/images/colarge/s2.jpg",
    since: "",
    description: " Ecoregen is a pioneering force in transformer oil regeneration and advanced equipment design. Our founders bring unmatched expertise in the field, specializing in the regeneration of transformer oil and the creation of high-efficiency regeneration systems.",
    services: [
      {
        value: ""
      },
      {
        value: ""
      },
      {
        value: ""
      }
    ]
  }

  services = {
    title: "The Best Industry services",
    subtitle: "High Performance Services For Multiple Industries And Technologies!",
    description: "Progressively maintain extensive infomediaries via extensible niches. Capitalize on low hanging fruit to identify a ballpark value added is activity to beta test. Override the igital divide with additional click throughs from fruit to identify a ballpark value added.",
    services: [
      {
        title: "Oil Degassing",
        description: "Eliminating dissolved gases and moisture from transformer oil, ensuring enhanced dielectric strength and performance reliability for electrical equipment.",
        icon: "flaticon-industry",
        serial: "01",
        pagelink: "s-oilgas"
      },
      {
        title: "PCB Decontamination Machines",
        description: "Specialized equipment for removing polychlorinated biphenyls (PCBs) from transformer oil, ensuring compliance with environmental regulations and safety standards.",
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
        serial: "04",
        pagelink: "s-automotive"
      },
      {
        title: "Transformer oil treatment systems",
        description: "FILOIL 24000 FILOIL 12000 FILOIL 9000 FILOIL 6000 Our top of the line model with great performance suited for large and mid-size power transformers",
        icon: "flaticon-robotic-arm",
        serial: "05",
        pagelink: "s-automotive"
      },
      {
        title: "Mobile Oil Regeneration Units",
        description: "Portable, on-site oil regeneration and purification solutions designed for flexibility and convenience, allowing maintenance without equipment downtime.",
        icon: "flaticon-robotic-arm",
        serial: "06",
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

  video = {
    title: "All Solutions",
    subtitle: "Get A Solution For All Industries",
    bgImage: "assets/images/background/bg-2.jpg",
    bgOpacity: "09",
    bgColor: "bg-white",
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
      quote: " What sets Ecoregen apart is our dedication to research, development, and precision engineering.",
      quoteby: "Prabha Sankar"
    }
  }

  team = {
    title: "Our Experts",
    subtitle: "We will serve you with the best of our capacity by expert team",
    boxWidth: "col-lg-4",
    members: [
      {
        image: "assets/images/team/smitha.jpg",
        name: "Paul James",
        post: ""
      },{
        image: "assets/images/team/pic1.jpg",
        name: "Sivam P Sankar",
        post: ""
      },
      {
        image: "assets/images/team/karthick.jpg",
        name: "Karthick K Cholan",
        post: ""
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
}
