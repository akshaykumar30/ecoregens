import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-home12',
  templateUrl: './page-home12.component.html',
  styleUrls: ['./page-home12.component.css']
})
export class PageHome12Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  about = {
    image: "assets/images/home-11/intro-pic2.jpg",
    contact: "+(06) 0205 783 5586",
    title: "Your home comfort experts",
    subtitle: "Quality Heating & Cooling Services",
    description1: "It is a long established fact that a reader will be distracted by the readable to content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,opposed using 'Con't here.",
    description2: "We believe our warranties set us apart from our competitors and show our commitment to quality work and service.",
    specifications: [
      "Refresing to get such a personal touch.",
      "We Believe in Maintaining Solid Core Values",
      "We Believe in Setting the Standard Higher"
    ]
  }

  features = {
    title: "Our Service features",
    subtitle: "What Else We’re Doing",
    features: [
      {
        image: "assets/images/home-11/service-features/1.jpg",
        title: "Duct Repairing",
        description: "Lorem ipsum dolor sit and amet, adipisicing elit, sed do eiusmod tempor."
      },
      {
        image: "assets/images/home-11/service-features/2.jpg",
        title: "Duct Repairing",
        description: "Lorem ipsum dolor sit and amet, adipisicing elit, sed do eiusmod tempor."
      },
      {
        image: "assets/images/home-11/service-features/3.jpg",
        title: "Duct Repairing",
        description: "Lorem ipsum dolor sit and amet, adipisicing elit, sed do eiusmod tempor."
      }
    ]
  }

  services = {
    title: "Main Services",
    subtitle: "Air Care provides a full range of heating and air conditioning services with special offers.",
    cooling: [
      {
        image: "assets/images/home-11/ac-gallery/cooling/1.jpg",
        title: "Duct Services"
      },
      {
        image: "assets/images/home-11/ac-gallery/cooling/2.jpg",
        title: "Maintenance"
      },
      {
        image: "assets/images/home-11/ac-gallery/cooling/3.jpg",
        title: "Air Conditioning"
      },
      {
        image: "assets/images/home-11/ac-gallery/cooling/4.jpg",
        title: "AIr Conditioner Repair"
      },
      {
        image: "assets/images/home-11/ac-gallery/cooling/5.jpg",
        title: "Thermostats Installation"
      }
    ],
    heating: [
      {
        image: "assets/images/home-11/ac-gallery/heating/1.jpg",
        title: "Heat Pumps"
      },
      {
        image: "assets/images/home-11/ac-gallery/heating/2.jpg",
        title: "Heating Installation"
      },
      {
        image: "assets/images/home-11/ac-gallery/heating/3.jpg",
        title: "Heating Repair"
      },
      {
        image: "assets/images/home-11/ac-gallery/heating/4.jpg",
        title: "Furnaces"
      },
      {
        image: "assets/images/home-11/ac-gallery/heating/5.jpg",
        title: "Ductwork Installation"
      }
    ]
  }

  testimonials = {
    title: "Feedback",
    subtitle: "Thoughts of our satisfied client about us",
    quotes: [
      {
        image: "assets/images/home-11/testimonials-12/pic1.jpg",
        name: "Lina Casey",
        designation: "Founder",
        quote: "This is due to their excellent service, competitive pricing and customer support . It's throughly refresing to get such a personal touch."
      },
      {
        image: "assets/images/home-11/testimonials-12/pic2.jpg",
        name: "Ashley Sanchez",
        designation: "Founder",
        quote: "This is due to their excellent service, competitive pricing and customer support . It's throughly refresing to get such a personal touch."
      },
      {
        image: "assets/images/home-11/testimonials-12/pic3.jpg",
        name: "Shirley Gibson",
        designation: "Director",
        quote: "This is due to their excellent service, competitive pricing and customer support . It's throughly refresing to get such a personal touch."
      },
      {
        image: "assets/images/home-11/testimonials-12/pic4.jpg",
        name: "Mike Hardson",
        designation: "Director",
        quote: "This is due to their excellent service, competitive pricing and customer support . It's throughly refresing to get such a personal touch."
      },
      {
        image: "assets/images/home-11/testimonials-12/pic5.jpg",
        name: "Edword Howells",
        designation: "Founder & CEO",
        quote: "This is due to their excellent service, competitive pricing and customer support . It's throughly refresing to get such a personal touch."
      }
    ]
  }

  blogs = {
    title: "From the blog",
    subtitle: "News & Articles",
    blogs: [
      {
        image: "assets/images/home-11/blog12/thum1.jpg",
        date: "05 April 2021",
        author: "Sophia Varner",
        title: "Heating and cooling ductless heat pump"
      },
      {
        image: "assets/images/home-11/blog12/thum2.jpg",
        date: "06 April 2021",
        author: "Sophia Varner",
        title: "How does a Humi-difier Maintenance Checklist"
      },
      {
        image: "assets/images/home-11/blog12/thum3.jpg",
        date: "08 April 2021",
        author: "Sophia Varner",
        title: "How you can Improve Air Conditioning Efficiency"
      }
    ]
  }
}
