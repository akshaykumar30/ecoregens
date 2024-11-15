import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-home7',
  templateUrl: './page-home7.component.html',
  styleUrls: ['./page-home7.component.css']
})
export class PageHome7Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  specifications = [
    {
      title1: "Thermal",
      title2: "Power",
      description: "We are providing different services in this sector.",
      image: "assets/images/oil-gas/icon/5.png",
      count: "01"
    },
    {
      title1: "Oil",
      title2: "Platform",
      description: "We are providing different services in this sector.",
      image: "assets/images/oil-gas/icon/1.png",
      count: "02"
    },
    {
      title1: "Gas",
      title2: "Flaring",
      description: "We are providing different services in this sector.",
      image: "assets/images/oil-gas/icon/3.png",
      count: "03"
    },
    {
      title1: "Oil",
      title2: "Pump",
      description: "We are providing different services in this sector.",
      image: "assets/images/oil-gas/icon/2.png",
      count: "04"
    },
    {
      title1: "Oil",
      title2: "Factory",
      description: "We are providing different services in this sector.",
      image: "assets/images/oil-gas/icon/6.png",
      count: "05"
    },
    {
      title1: "Oil",
      title2: "Refinaery",
      description: "We are providing different services in this sector.",
      image: "assets/images/oil-gas/icon/4.png",
      count: "06"
    }
  ]

  whatWeDo = {
    title: "What We do",
    subtitle: "Providing Full Range of High Services Solution Worldwide",
    description: "Progressively maintain extensive infomediaries via extensible niches. Capitalize on low hanging fruit to identify a ballpark value added is activity to beta test. Override the igital divide",
    masonry: [
      "assets/images/oil-gas/s-1.jpg",
      "assets/images/oil-gas/l-2.jpg",
      "assets/images/oil-gas/l-1.jpg",
      "assets/images/oil-gas/s-3.jpg"
    ],
    work: [
      "Quality Control System , 100% Satisfaction Guarantee",
      "Unrivalled Workmanship, Professional and Qualified",
      "Environmental Sensitivity, Personalised Solutions"
    ],
    sign: "assets/images/sign.png",
    signBy: "Brayden",
    designation: "( CEO & Founder )"
  }

  services = {
    title: "We Provide Energy",
    subtitle: "To many clients like government, homes and offices",
    services: [
      {
        image: "assets/images/oil-gas/icon-2/1.png",
        title: "We Care About Envirement",
        description: "Lorem Ipsum is simply dummy text of the printing and type setting."
      },
      {
        image: "assets/images/oil-gas/icon-2/2.png",
        title: "We Think About Consumer",
        description: "Lorem Ipsum is simply dummy text of the printing and type setting."
      },
      {
        image: "assets/images/oil-gas/icon-2/3.png",
        title: "Oil Resources",
        description: "Lorem Ipsum is simply dummy text of the printing and type setting."
      },
      {
        image: "assets/images/oil-gas/icon-2/4.png",
        title: "We Fight Polution",
        description: "Lorem Ipsum is simply dummy text of the printing and type setting."
      },
      {
        image: "assets/images/oil-gas/icon-2/5.png",
        title: "Chimical Analysis",
        description: "Lorem Ipsum is simply dummy text of the printing and type setting."
      },
      {
        image: "assets/images/oil-gas/icon-2/6.png",
        title: "Awesome Employees",
        description: "Lorem Ipsum is simply dummy text of the printing and type setting."
      }
    ]
  }

  projects = {
    title: "Latest Projects",
    subtitle: "Our Projects",
    projects: [
      {
        image: "assets/images/oil-gas/projects/pic1.jpg",
        title: "Metal Industry"
      },
      {
        image: "assets/images/oil-gas/projects/pic2.jpg",
        title: "Alternative Energy"
      },
      {
        image: "assets/images/oil-gas/projects/pic3.jpg",
        title: "Areb Oil Rigs"
      },
      {
        image: "assets/images/oil-gas/projects/pic4.jpg",
        title: "Gothia Mining Factory"
      },
      {
        image: "assets/images/oil-gas/projects/pic5.jpg",
        title: "Warehouse Industry"
      },
      {
        image: "assets/images/oil-gas/projects/pic6.jpg",
        title: "Warehouse Industry"
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

  testimonials = {
    title: "What our client say",
    subtitle: "Happy WIth Customers & Clients",
    bgImage: "assets/images/background/bg-7.jpg",
    bgClass: "bg-center site-bg-secondry",
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

  counter = {
    title: "All Solutions",
    subtitle: "Get A Solution For All Transportation",
    bgImage: "",
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

  blogs = {
    title: "Latest Articles Updated Daily",
    subtitle: "We Are Here To Learn You More From Blog",
    blogs: [
      {
        image: "assets/images/oil-gas/default_3/thum1.jpg",
        date: "July 28, 2021",
        comments: "24",
        title: "Exporters Achieve Cost Savings Throughout"
      },
      {
        image: "assets/images/oil-gas/default_3/thum2.jpg",
        date: "July 28, 2021",
        comments: "24",
        title: "Deliveright Logistics Expands Service to West"
      },
      {
        image: "assets/images/oil-gas/default_3/thum3.jpg",
        date: "July 28, 2021",
        comments: "24",
        title: "Software May Be Best Bet to Conquer Final Mile"
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
