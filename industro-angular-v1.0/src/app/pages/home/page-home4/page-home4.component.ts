import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-home4',
  templateUrl: './page-home4.component.html',
  styleUrls: ['./page-home4.component.css']
})
export class PageHome4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  whatwedo = {
    title: "What We do",
    subtitle: "Providing Full Range of High Services Solution Worldwide",
    description: "Progressively maintain extensive infomediaries via extensible niches. Capitalize on low hanging fruit to identify a ballpark value added is activity to beta test. Override the igital divide",
    image: "assets/images/what-we_2/pic1.jpg",
    experience: {
      title: "Help transportation and logistics companies",
      description: "Representative logistics operator providing full range of service in the sphere of customs."
    },
    work: [
      {
        icon: "fa fa-plane",
        title: "Air Freight",
        description: "We can arrange and provides with the comprehensive service in the sphere."
      },
      {
        icon: "fa fa-ship",
        title: "Ocean Freight",
        description: "We provides with the main types of basic conditions International sea Fright."
      }
    ]
  }

  services = {
    title: "Services We Offer",
    subtitle: "We Manage Lead Logistics For World’s Multinational Companies.",
    description: "Progressively maintain extensive infomediaries via extensible niches. Capitalize on low hanging fruit to identify a ballpark value added is activity to beta test. Override the igital divide with additional click throughs from fruit to identify a ballpark value added.",
    services: [
      {
        image: "assets/images/services_2/1.jpg",
        title: "Warehousing"
      },
      {
        image: "assets/images/services_2/2.jpg",
        title: "Air Freight"
      },
      {
        image: "assets/images/services_2/3.jpg",
        title: "Ocean Freight"
      },
      {
        image: "assets/images/services_2/4.jpg",
        title: "Road Freight"
      },
      {
        image: "assets/images/services_2/5.jpg",
        title: "Insurance"
      }
    ]
  }

  counter = {
    title: "All Solutions",
    subtitle: "Get A Solution For All Transportation",
    bgImage: "assets/images/background/bg-11.jpg",
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

  team = {
    title: "Our Experts",
    subtitle: "We will serve you with the best of our capacity by expert team",
    boxWidth: "col-lg-4",
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
    blogs: [
      {
        image: "assets/images/blog/default_3/thum1.jpg",
        date: "July 28, 2021",
        comments: "24",
        title: "Deliveright Logistics Expands Service to West"
      },
      {
        image: "assets/images/blog/default_3/thum2.jpg",
        date: "July 28, 2021",
        comments: "24",
        title: "Present you with examples of 3 posts from authority websites click"
      },
      {
        image: "assets/images/blog/default_3/thum3.jpg",
        date: "July 28, 2021",
        comments: "24",
        title: "Explain to you why they work and what makes people click them"
      }
    ]
  }

  caseStudies = {
    title: "Latest Case Studies",
    subtitle: "Featured Projects",
    bgImage: "assets/images/background/bg-11.jpg",
    cases: [
      {
        image: "assets/images/project_2/pic1.jpg",
        title: "Distribution",
        subtitle: "High Performance Services For Multiple Insdustries And Technologies!"
      },
      {
        image: "assets/images/project_2/pic2.jpg",
        title: "Warehousing",
        subtitle: "Committed to delivering high quality projects and innovate business."
      },
      {
        image: "assets/images/project_2/pic3.jpg",
        title: "Optimization",
        subtitle: "High Performance Services For Multiple Insdustries And Technologies!"
      },
      {
        image: "assets/images/project_2/pic4.jpg",
        title: "Logistics",
        subtitle: "Committed to delivering high quality projects and innovate business."
      },
      {
        image: "assets/images/project_2/pic5.jpg",
        title: "Analystics",
        subtitle: "High Performance Services For Multiple Insdustries And Technologies!"
      },
      {
        image: "assets/images/project_2/pic6.jpg",
        title: "Storage",
        subtitle: "Committed to delivering high quality projects and innovate business."
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
