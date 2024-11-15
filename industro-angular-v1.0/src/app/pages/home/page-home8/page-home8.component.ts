import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-home8',
  templateUrl: './page-home8.component.html',
  styleUrls: ['./page-home8.component.css']
})
export class PageHome8Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  about = {
    title: "Welcome to industro",
    subtitle: "We Are Here to Increase Your Knowledge With Experience",
    image: "assets/images/new-index/colarge/s1.jpg",
    specifications: [
      "Quality Control System , 100% Satisfaction Guarantee",
      "Unrivalled Workmanship, Professional and Qualified",
      "Environmental Sensitivity, Personalised Solutions"
    ],
    description: "Progressively maintain extensive infomediaries via extensible nich. Capitalize on low hanging fruit. a ballpark value added is activity to beta test. Override the digital divide with additional click throughs from fruit to identify a ballpark value added."
  }

  services = {
    title: "The Best Industry Services",
    subtitle: "High Performance Services For Multiple Insdustries!",
    services: [
      {
        icon: "flaticon-oil",
        count: "01",
        title: "Oil & Gas Engineering",
        description: "Progressively maintain extensive infomediaries via extensible nich. Capitalize on low hanging fruit."
      },
      {
        icon: "flaticon-conveyor",
        count: "02",
        title: "Mechanical Engineering",
        description: "Progressively maintain extensive infomediaries via extensible nich. Capitalize on low hanging fruit."
      },
      {
        icon: "flaticon-robotic-arm",
        count: "03",
        title: "Automotive Manufacturing",
        description: "Progressively maintain extensive infomediaries via extensible nich. Capitalize on low hanging fruit."
      },
      {
        icon: "flaticon-helmet",
        count: "04",
        title: "Civil Engineering",
        description: "Progressively maintain extensive infomediaries via extensible nich. Capitalize on low hanging fruit."
      },
      {
        icon: "flaticon-industry",
        count: "05",
        title: "Chemical Research",
        description: "Progressively maintain extensive infomediaries via extensible nich. Capitalize on low hanging fruit."
      }
    ]
  }

  whatWeDo = {
    title: "What We do",
    subtitle: "Providing Full Range of High Services",
    description: "Progressively maintain extensive infomediaries via extensible niches. Capitalize on low hanging fruit to identify a ballpark value added is activity to beta test. Override the igital divide",
    image: "assets/images/new-index/what-we_2/pic1.jpg",
    experience: {
      title: "Team Working Dedicatedly",
      description: "We have 26+ years of experience with providing wide area of specialty services works listed below"
    },
    work: [
      {
        icon: "flaticon-robotic-arm",
        title: "A Full Services",
        description: "We can arrange and provides with the comprehensive service in the sphere."
      },
      {
        icon: "flaticon-repair",
        title: "All Maintenance",
        description: "We provides with the main types of basic conditions International sea Fright."
      }
    ]
  }

  video = {
    title: "All Solutions",
    subtitle: "Get A Solution For All Industries",
    image: "assets/images/new-index/self-pic.png",
    videoLink: "https://www.youtube.com/watch?v=fgExvIUYg5w",
    videoThumb: "assets/images/new-index/video-1.jpg",
    thumbTitle: "Founded in 1995",
    thumbSubtitle: "The Best Solution For all industries",
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
      }
    ]
  }

  projects = {
    title: "Explore Recent Work",
    subtitle: "We've Done Lot's Projects Let's Check Some Here",
    projects: [
      {
        category: "cat-1",
        image: "assets/images/project/square/1.jpg",
        title: "Manufacturing",
        subtitle: "Mechanical Engineering"
      },
      {
        category: "cat-2",
        image: "assets/images/project/square/2.jpg",
        title: "Oil & Gas",
        subtitle: "Al Zour Refinery"
      },
      {
        category: "cat-3",
        image: "assets/images/project/square/3.jpg",
        title: "Construction",
        subtitle: "Fehmarn Belt Fixed Link"
      },
      {
        category: "cat-1",
        image: "assets/images/project/square/4.jpg",
        title: "Chemical",
        subtitle: "Citrus Battery"
      },
      {
        category: "cat-2",
        image: "assets/images/project/square/5.jpg",
        title: "Industrial",
        subtitle: "Space Technology"
      },
      {
        category: "cat-3",
        image: "assets/images/project/square/6.jpg",
        title: "Agriculture",
        subtitle: "Soil and Water Testing"
      }
    ]
  }

  testimonials = {
    title: "What our client say",
    subtitle: "Happy With Customers & Clients",
    description: "Our experience spans every industry and challenge, which gives us a unique perspective that we bring to every client relationship. We help you see the world differently, discover opportunities you may never have imagined and achieve results that bridge what is with what can be.",
    quotes: [
      {
        image: "assets/images/testimonials/pic1.jpg",
        quote: "This is not just another nail salon! These ladies are super talented! My nails have never looked/felt more amazing!! the environment here is so happy and cheery!",
        quoteBy: "Malcolm Franzcrip",
        designation: "Contractor"
      },
      {
        image: "assets/images/testimonials/pic2.jpg",
        quote: "This is not just another nail salon! These ladies are super talented! My nails have never looked/felt more amazing!! the environment here is so happy and cheery!",
        quoteBy: "Malcolm Franzcrip",
        designation: "Contractor"
      },
      {
        image: "assets/images/testimonials/pic3.jpg",
        quote: "This is not just another nail salon! These ladies are super talented! My nails have never looked/felt more amazing!! the environment here is so happy and cheery!",
        quoteBy: "Malcolm Franzcrip",
        designation: "Contractor"
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
    blogs: [
      {
        image: "assets/images/oil-gas/default_3/thum1.jpg",
        type: "Materials",
        date: "April 09, 2021",
        author: "Admin",
        title: "Technology is important for your business"
      },
      {
        image: "assets/images/oil-gas/default_3/thum2.jpg",
        type: "Technology",
        date: "April 18, 2021",
        author: "Admin",
        title: "Present you with examples of 3 posts from authority"
      },
      {
        image: "assets/images/oil-gas/default_3/thum3.jpg",
        type: "Manufacturing",
        date: "April 22, 2021",
        author: "Admin",
        title: "Explain to you why they work and what makes"
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
