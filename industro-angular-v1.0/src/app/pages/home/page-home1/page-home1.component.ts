import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-home1',
  templateUrl: './page-home1.component.html',
  styleUrls: ['./page-home1.component.css']
})
export class PageHome1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  about = {
    title: "Welcome to Ecoregen",
    subtitle: "We Are Here to Increase Your Knowledge With Experience",
    image: "assets/images/colarge/s1.jpg",
    since: "",
    description: " Ecoregen is a pioneering force in transformer oil regeneration and advanced equipment design. Our founders bring unmatched expertise in the field, specializing in the regeneration of transformer oil and the creation of high-efficiency regeneration systems.",
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

  services = {
    title: "The Best Industry services",
    subtitle: "High Performance Services For Multiple Insdustries And Technologies!",
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

  whatwedo = {
    title: "What We do",
    subtitle: "Providing Full Range of High Services Solution Worldwide",
    description: "Ecoregen’s solutions are trusted by a wide range of clients, including power utilities, industrial facilities, and transformer manufacturers around the world. Our commitment to excellence has earned us a reputation for reliability, technical expertise, and exceptional service, making us a preferred partner for clients seeking dependable and environmentally conscious oil regeneration technology.",
    image: "assets/images/what-we/pic1.jpg",
    experience: {
      title: "Team Working Dedicatedly",
      description: "We have many years of experience with providing wide area of specialty services works listed below"
    },
    work: [
      {
        icon: "flaticon-robotic-arm",
        title: "High Standard Services",
        description: "We are providing different services in this sector to wide area of world"
      },
      {
        icon: "flaticon-repair",
        title: "Maintenance",
        description: "We are proud to Protect your organization with our award-winning products"
      },
      {
        icon: "flaticon-repair",
        title: "Regeneration Systems",
        description: " Our cutting-edge regeneration systems are meticulously engineered to remove contaminants, moisture, and acidity, restoring the oil to optimal conditions and extending transformer lifespan. "
      }
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
      quoteby: "Prabha Sankar, CEO"
    }
  }

  projects = {
    title: "Explore Recent Work",
    subtitle: "We've Done Lot's Projects Let's Check Some Here",
    description: "You will find yourself working in a partnership that result in an incredible Experience, and an end products that is the best",
    image: "assets/images/crane.png",
    projects: [
      {
      title: "Manufacturing & Maintenance",
      subtitle: "Mechanical Engineering",
      description: "You will find yourself working that result partnership in an incredible Experience, and an end products that is the best",
      image: "assets/images/project/pic1.jpg"
      },
      {
        title: "Manufacturing & Maintenance",
        subtitle: "Mechanical Engineering",
        description: "You will find yourself working that result partnership in an incredible Experience, and an end products that is the best",
        image: "assets/images/project/pic2.jpg"
      },
      {
        title: "Manufacturing & Maintenance",
        subtitle: "Mechanical Engineering",
        description: "You will find yourself working that result partnership in an incredible Experience, and an end products that is the best",
        image: "assets/images/project/pic3.jpg"
      },
      {
        title: "Manufacturing & Maintenance",
        subtitle: "Mechanical Engineering",
        description: "You will find yourself working that result partnership in an incredible Experience, and an end products that is the best",
        image: "assets/images/project/pic4.jpg"
      }
    ]
  }

  team = {
    title: "Our Experts",
    subtitle: "We will serve you with the best of our capacity by expert team",
    boxWidth: "col-lg-4",
    members: [
      {
        image: "assets/images/team/smitha.jpg",
        name: "Paul Hodgson",
        post: ""
      },
      {
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

  testimonials = {
    title: "What our client say",
    subtitle: "Happy WIth Customers & Clients",
    description: "I feel very happy and be proud to connect with this industry. i presume this is a very productive and professional industry.i wish very good luck & success for this industry",
    quotesTitle: "Client says",
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
      }
    ]
  }

  blogs = {
    title: "Latest Articles Updated Daily",
    subtitle: "We Are Here To Learn You More From Blog",
    blogs: [
      {
        image: "assets/images/blog/default/thum1.jpg",
        field: "Materials",
        date: "July 28, 2021",
        comments: "24",
        title: "Technology is important for your business, you use technology makes"
      },
      {
        image: "assets/images/blog/default/thum2.jpg",
        field: "Technology",
        date: "July 28, 2021",
        comments: "24",
        title: "Present you with examples of 3 posts from authority websites click"
      },
      {
        image: "assets/images/blog/default/thum3.jpg",
        field: "Manufacturing",
        date: "July 28, 2021",
        comments: "24",
        title: "Explain to you why they work and what makes people click them"
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
