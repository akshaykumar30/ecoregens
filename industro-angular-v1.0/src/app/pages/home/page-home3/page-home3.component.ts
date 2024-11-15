import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-home3',
  templateUrl: './page-home3.component.html',
  styleUrls: ['./page-home3.component.css']
})
export class PageHome3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  projects = {
    title: "Explore Recent Work",
    subtitle: "We've Done Lot's Projects Let's Check Some Here",
    projects : [
      {
        image: "assets/images/gallery/portrait-2/pic1.jpg",
        title: "Modern minimalist house",
        subtitle: "Lorem ipsum dolor sit amet,tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        field: "Construction"
      },
      {
        image: "assets/images/gallery/portrait-2/pic2.jpg",
        title: "Modern minimalist house",
        subtitle: "Lorem ipsum dolor sit amet,tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        field: "Renovation"
      },
      {
        image: "assets/images/gallery/portrait-2/pic3.jpg",
        title: "Modern minimalist house",
        subtitle: "Lorem ipsum dolor sit amet,tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        field: "Interior"
      },
      {
        image: "assets/images/gallery/portrait-2/pic4.jpg",
        title: "Modern minimalist house",
        subtitle: "Lorem ipsum dolor sit amet,tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        field: "Construction"
      },
      {
        image: "assets/images/gallery/portrait-2/pic5.jpg",
        title: "Modern minimalist house",
        subtitle: "Lorem ipsum dolor sit amet,tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        field: "Renovation"
      },
      {
        image: "assets/images/gallery/portrait-2/pic6.jpg",
        title: "Modern minimalist house",
        subtitle: "Lorem ipsum dolor sit amet,tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        field: "Interior"
      }
    ]
  }

  specifications = [
    {
      icon: "fa fa-angellist",
      count: "01",
      title: "Consecutive Award winning",
      subtitle: "Lorem Ipsum is simply dummy text of the printing and type setting."
    },
    {
      icon: "fa fa-object-group",
      count: "02",
      title: "We are creative designers",
      subtitle: "Lorem Ipsum is simply dummy text of the printing and type setting."
    },
    {
      icon: "fa fa-diamond",
      count: "03",
      title: "Heigh quality products",
      subtitle: "Lorem Ipsum is simply dummy text of the printing and type setting."
    }
  ]

  video = {
    title: "All Solutions",
    subtitle: "Get A Solution For All Industries",
    videoLink: "https://www.youtube.com/watch?v=fgExvIUYg5w",
    quote: "Many of Our SELF registered employees are requested an main preferred temporary staff when all service",
    quoteBy: "Farnandoz Biki, CEO",
    description: {
      title: "The Best Solution For all industries",
      subtitle: "Seving an impressive list of long-term clients with experience and expertise in industries."
    }
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

  about = {
    title: "Welcome to industro",
    subtitle: "We Are Here to Increase Your Knowledge With Experience",
    image1: "assets/images/colarge_2/s2.jpg",
    image2: "assets/images/colarge_2/s1.jpg",
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

  counter = [
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

  testimonials = {
    title: "What our client say",
    bgImage: "assets/images/background/bg-map.png",
    bgClass: "bg-center bg-gray",
    subtitle: "Happy WIth Customers & Clients",
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
    bgImage: "assets/images/background/bg-9.jpg",
    members: [
      {
        image: "assets/images/team_2/pic1.jpg",
        name: "Malcolm Franzcrip",
        post: "Contractor"
      },
      {
        image: "assets/images/team_2/pic2.jpg",
        name: "Froster Collings",
        post: "Contractor"
      },
      {
        image: "assets/images/team_2/pic3.jpg",
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
        image: "assets/images/blog/default_2/thum1.jpg",
        field: "Materials",
        date: "July 28, 2021",
        comments: "24",
        title: "Technology is important for your business, you use technology makes"
      },
      {
        image: "assets/images/blog/default_2/thum2.jpg",
        field: "Technology",
        date: "July 28, 2021",
        comments: "24",
        title: "Present you with examples of 3 posts from authority websites click"
      },
      {
        image: "assets/images/blog/default_2/thum3.jpg",
        field: "Manufacturing",
        date: "July 28, 2021",
        comments: "24",
        title: "Explain to you why they work and what makes people click them"
      }
    ]
  }
}
