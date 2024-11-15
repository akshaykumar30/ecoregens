import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-home11',
  templateUrl: './page-home11.component.html',
  styleUrls: ['./page-home11.component.css']
})
export class PageHome11Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  about = {
    title: "About Us",
    subtitle: "We've been building our experience",
    description: "You can dream, create, design and build the most wonderful place in the world. But it requires people. Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet consectetur.",
    specifications: [
      "Quality Control System , 100% Satisfaction Guarantee",
      "Highly Professional Staff, Accurate Testing Processes",
      "Expertise & Innovation from a truly global company"
    ],
    image: "assets/images/home-11/ipad-bg.png",
    videoLink: "https://www.youtube.com/watch?v=c1XNqw2gSbU"
  }

  whatWeDo = {
    title: "What We Do!",
    subtitle: "Let's build your dream together",
    work: [
      {
        image: "assets/images/home-11/icon/pic-1.png",
        title: "Architecture Design",
        description: "Lorem ipsum dolor sit and amet, adipisicing elit, sed do eiusmod tempor."
      },
      {
        image: "assets/images/home-11/icon/pic-2.png",
        title: "Build Construction",
        description: "Lorem ipsum dolor sit and amet, adipisicing elit, sed do eiusmod tempor."
      },
      {
        image: "assets/images/home-11/icon/pic-3.png",
        title: "Building Renovation",
        description: "Lorem ipsum dolor sit and amet, adipisicing elit, sed do eiusmod tempor."
      },
      {
        image: "assets/images/home-11/icon/pic-4.png",
        title: "Awesome Worker",
        description: "Lorem ipsum dolor sit and amet, adipisicing elit, sed do eiusmod tempor."
      }
    ]
  }

  services = {
    title: "Our Services",
    subtitle: "We provide you all the construction related services.",
    description: "Our goal is simple, to make things that people care about. We were founded on this principle and we will always be commited to it.",
    services: [
      {
        image: "assets/images/home-11/s-gallery/1.jpg",
        title: "Building Planning",
        description: "You can dream, create, design and build the most wonderful place in the world."
      },
      {
        image: "assets/images/home-11/s-gallery/2.jpg",
        title: "Architecture & Building",
        description: "You can dream, create, design and build the most wonderful place in the world."
      },
      {
        image: "assets/images/home-11/s-gallery/3.jpg",
        title: "House Renovation",
        description: "You can dream, create, design and build the most wonderful place in the world."
      },
      {
        image: "assets/images/home-11/s-gallery/4.jpg",
        title: "interior construction",
        description: "You can dream, create, design and build the most wonderful place in the world."
      },
      {
        image: "assets/images/home-11/s-gallery/5.jpg",
        title: "Mines construction",
        description: "You can dream, create, design and build the most wonderful place in the world."
      }
    ]
  }

  team = {
    title: "Our Best Team",
    subtitle: "We have a group of talented and trained members all the time.",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tinciunt consectetuer adipiscing elit, sed diam nonummy",
    members: [
      {
        image: "assets/images/home-11/team/pic1.jpg",
        name: "Ronald Long",
        designation: "Contractor"
      },
      {
        image: "assets/images/home-11/team/pic2.jpg",
        name: "Ashley Sanchez",
        designation: "Contractor"
      },
      {
        image: "assets/images/home-11/team/pic3.jpg",
        name: "Juliana Bryant",
        designation: "Contractor"
      },
      {
        image: "assets/images/home-11/team/pic4.jpg",
        name: "Shirley Gibson",
        designation: "Contractor"
      }
    ]
  }

  clients = [
    "assets/images/home-11/client-logo/w1.png",
    "assets/images/home-11/client-logo/w2.png",
    "assets/images/home-11/client-logo/w3.png",
    "assets/images/home-11/client-logo/w4.png",
    "assets/images/home-11/client-logo/w5.png",
    "assets/images/home-11/client-logo/w6.png",
    "assets/images/home-11/client-logo/w1.png",
    "assets/images/home-11/client-logo/w2.png"
  ]

  projects = {
    title: "Explore Recent Work",
    subtitle: "Some of our finished projects that will amaze you",
    projects: [
      {
        image: "assets/images/home-11/project/1.jpg",
        type: "Bridger",
        title: "Nh-16 Highway Bridge",
        description: "You can dream, create, design and build the  most wonderful place in the world."
      },
      {
        image: "assets/images/home-11/project/2.jpg",
        type: "Engineering",
        title: "Ruma Dam Project",
        description: "You can dream, create, design and build the  most wonderful place in the world."
      },
      {
        image: "assets/images/home-11/project/3.jpg",
        type: "Apartment",
        title: "Dubai Housing Project",
        description: "You can dream, create, design and build the  most wonderful place in the world."
      },
      {
        image: "assets/images/home-11/project/4.jpg",
        type: "Building",
        title: "House Extensions",
        description: "You can dream, create, design and build the  most wonderful place in the world."
      },
      {
        image: "assets/images/home-11/project/5.jpg",
        type: "Renovation",
        title: "Renovation",
        description: "You can dream, create, design and build the  most wonderful place in the world."
      },
      {
        image: "assets/images/home-11/project/6.jpg",
        type: "Mines",
        title: "Tehla Mines Project",
        description: "You can dream, create, design and build the  most wonderful place in the world."
      }
    ]
  }

  testimonials = {
    title: "Client Testimonial",
    subtitle: "The customer's perception is your reality",
    quotes: [
      {
        image:"assets/images/home-11/testimonials/pic1.jpg",
        name: "Lina Casey",
        designation: "Founder",
        quote: "You could debate whether it is an issue of the theme or a new extension Plaza theme support and response has been amazing"
      },
      {
        image:"assets/images/home-11/testimonials/pic2.jpg",
        name: "Ashley Sanchez",
        designation: "Founder",
        quote: "Extension Plaza theme support and response has been amazing, helping me with several issues"
      },
      {
        image:"assets/images/home-11/testimonials/pic3.jpg",
        name: "Shirley Gibson",
        designation: "Director",
        quote: "You could debate whether it is an issue of the theme or a new extension Plaza theme support and response has been amazing"
      },
      {
        image:"assets/images/home-11/testimonials/pic1.jpg",
        name: "Mike Hardson",
        designation: "Founder",
        quote: "Extension Plaza theme support and response has been amazing, helping me with several issues."
      },
      {
        image:"assets/images/home-11/testimonials/pic2.jpg",
        name: "Edword Howells",
        designation: "Founder & CEO",
        quote: "You could debate whether it is an issue of the theme or a new extension Plaza theme support and response has been amazing"
      }
    ]
  }

  blogs = {
    title: "Latest Articles Updated Daily",
    subtitle: "We Are Here To Learn You More From Blog",
    blogs: [
      {
        image: "assets/images/home-11/blog/bg1.jpg",
        date: "March 9, 2021",
        title: "Broad vision. Careful thought. Hand-crafted design."
      },
      {
        image: "assets/images/home-11/blog/bg2.jpg",
        date: "March 9, 2021",
        title: "Building your dream house shouldn’t be a nightmare!"
      },
      {
        image: "assets/images/home-11/blog/bg3.jpg",
        date: "March 9, 2021",
        title: "Creating quality urban lifestyles, building stronger communities."
      },
      {
        image: "assets/images/home-11/blog/bg4.jpg",
        date: "March 9, 2021",
        title: "For your roofing and siding, quality we’ll be providing!"
      },
      {
        image: "assets/images/home-11/blog/bg5.jpg",
        date: "March 9, 2021",
        title: "Doing it right costs less than doing it over!"
      },
      {
        image: "assets/images/home-11/blog/bg6.jpg",
        date: "March 9, 2021",
        title: "Developing our people, Growing our business."
      }
    ]
  }
}
