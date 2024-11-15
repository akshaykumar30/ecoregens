import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-home5',
  templateUrl: './page-home5.component.html',
  styleUrls: ['./page-home5.component.css']
})
export class PageHome5Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  services = {
    title: "Welcome to Industro",
    subtitle: "Professional Gardening, Landscaping Services By Industro",
    services: [
      {
        image: "assets/images/gallery/portrait-3/pic1.jpg",
        detailImage: "assets/images/gallery/portrait-2/pic1.jpg",
        type: "Shrub Care",
        description: "Lorem ipsum dolor sit amet,tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        title: "Tree & Shrub Care"
      },
      {
        image: "assets/images/gallery/portrait-3/pic2.jpg",
        detailImage: "assets/images/gallery/portrait-2/pic2.jpg",
        type: "Renovation",
        description: "Lorem ipsum dolor sit amet,tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        title: "Lawn Renovation"
      },
      {
        image: "assets/images/gallery/portrait-3/pic3.jpg",
        detailImage: "assets/images/gallery/portrait-2/pic3.jpg",
        type: "Maintenance",
        description: "Lorem ipsum dolor sit amet,tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        title: "Lawn Maintenance"
      },
      {
        image: "assets/images/gallery/portrait-3/pic4.jpg",
        detailImage: "assets/images/gallery/portrait-2/pic4.jpg",
        type: "Landscape",
        description: "Lorem ipsum dolor sit amet,tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        title: "Landscape Lighting"
      },
      {
        image: "assets/images/gallery/portrait-3/pic5.jpg",
        detailImage: "assets/images/gallery/portrait-2/pic5.jpg",
        type: "Clean-ups",
        description: "Lorem ipsum dolor sit amet,tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        title: "Seasonal Clean-ups"
      },
      {
        image: "assets/images/gallery/portrait-3/pic6.jpg",
        detailImage: "assets/images/gallery/portrait-2/pic6.jpg",
        type: "Flowerscaping",
        description: "Lorem ipsum dolor sit amet,tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        title: "Flowerscaping"
      }
    ]
  }

  video = {
    title: "All Solutions",
    subtitle: "Get A Solution For All Industries",
    bgImage: "assets/images/background/bg-15.jpg",
    bgOpacity: "05",
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
      quote: "Many of Our SELF registered employees are requested an main preferred temporary staff when all service",
      quoteby: "Farnandoz Biki, CEO"
    }
  }

  projects = {
    title: "Our Projects",
    subtitle: "Our Latest Works",
    projects: [
      {
        image: "assets/images/project_3/pic1.jpg",
        title: "Modren Garden",
        description: "Progressively maintain extensive infomediaries via extensible nich."
      },
      {
        image: "assets/images/project_3/pic2.jpg",
        title: "Wooden Decks",
        description: "Progressively maintain extensive infomediaries via extensible nich."
      },
      {
        image: "assets/images/project_3/pic3.jpg",
        title: "Leaf Cutting",
        description: "Progressively maintain extensive infomediaries via extensible nich."
      },
      {
        image: "assets/images/project_3/pic4.jpg",
        title: "Lawn Mower",
        description: "Progressively maintain extensive infomediaries via extensible nich."
      },
      {
        image: "assets/images/project_3/pic5.jpg",
        title: "Parking Cleaning",
        description: "Progressively maintain extensive infomediaries via extensible nich."
      },
      {
        image: "assets/images/project_3/pic6.jpg",
        title: "Design Planting",
        description: "Progressively maintain extensive infomediaries via extensible nich."
      }
    ]
  }

  testimonials = {
    title: "What our client say",
    subtitle: "Happy WIth Customers & Clients",
    bgImage: "assets/images/background/bg-13.jpg",
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

  team = {
    title: "Our Experts",
    subtitle: "We will serve you with the best of our capacity by expert team",
    bgImage: "",
    members: [
      {
        image: "assets/images/team-5/pic1.jpg",
        name: "Malcolm Franzcrip",
        post: "Contractor"
      },
      {
        image: "assets/images/team-5/pic2.jpg",
        name: "Froster Collings",
        post: "Contractor"
      },
      {
        image: "assets/images/team-5/pic3.jpg",
        name: "Melena Marshall",
        post: "Contractor"
      }
    ]
  }

  selfIntro = {
    image: "assets/images/self-pic-2.png",
    bgImage: "assets/images/background/bg-14.jpg",
    bgClass: "bg-white",
    bgCover: "bg-cover",
    opacity: "opacity-07",
    imageClass: "self-intro-pic-block2"
  }

  blogs = {
    title: "Latest Articles Updated Daily",
    subtitle: "We Are Here To Learn You More From Blog",
    articles: [
      {
        image: "assets/images/blog/default-5/thum1.jpg",
        type: "Materials",
        date: "February 28, 2021",
        comments: "24",
        title: "Technology is important for your business, you use technology makes"
      },
      {
        image: "assets/images/blog/default-5/thum2.jpg",
        type: "Technology",
        date: "February 28, 2021",
        comments: "24",
        title: "Present you with examples of 3 posts from authority websites click"
      }
    ]
  }

  clients = {
    bgcolor: "bg-gray",
    clients: [
      "assets/images/client-logo2/w1.png",
      "assets/images/client-logo2/w2.png",
      "assets/images/client-logo2/w3.png",
      "assets/images/client-logo2/w4.png",
      "assets/images/client-logo2/w5.png",
      "assets/images/client-logo2/w6.png",
      "assets/images/client-logo2/w1.png",
      "assets/images/client-logo2/w2.png",
      "assets/images/client-logo2/w3.png",
      "assets/images/client-logo2/w4.png",
      "assets/images/client-logo2/w5.png",
      "assets/images/client-logo2/w6.png"
    ]
  }
}
