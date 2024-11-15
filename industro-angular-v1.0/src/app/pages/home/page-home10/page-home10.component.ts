import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-home10',
  templateUrl: './page-home10.component.html',
  styleUrls: ['./page-home10.component.css']
})
export class PageHome10Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  callUs = {
    title: "Call Us And get it done!",
    subtitle: "We Have 30+ Years Industrial Experiences",
    call: "+(06) 0205 783 5586",
    support: "info@thewebmax.com",
    openTime1: "Mon - Sat  07:00 - 21:00",
    openTime2: "Sunday - Closed"
  }

  about = {
    title: "About Industroz",
    subtitle: "We Provide top industrial Services.",
    image: "assets/images/ui-10/intro-pic.jpg",
    imageIcon: "flaticon-industry",
    imageTag: "Running Business Since 1995",
    specifications: [
      {
        title: "Quality Control System, 100% Guarantee",
        description: "We Are Proudly Providing Services Since 1995. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed."
      },
      {
        title: "Highly Modified Equipment",
        description: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."
      },
      {
        title: "Environmental Sensitivity",
        description: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."
      }
    ],
    sign: "assets/images/ui-10/sign.png"
  }

  projects = {
    title: "Our Latest Projects",
    subtitle: "Recently Completed Projects",
    projects: [
      {
        image: "assets/images/ui-10/project/1.jpg",
        count: "01",
        title: "Automated Machine Systems"
      },
      {
        image: "assets/images/ui-10/project/2.jpg",
        count: "02",
        title: "Bridge Making Technology"
      },
      {
        image: "assets/images/ui-10/project/3.jpg",
        count: "03",
        title: "Gas Energy Saving System"
      },
      {
        image: "assets/images/ui-10/project/4.jpg",
        count: "04",
        title: "Latest Welding Technology"
      },
      {
        image: "assets/images/ui-10/project/5.jpg",
        count: "05",
        title: "Future architecture ideas"
      },
      {
        image: "assets/images/ui-10/project/6.jpg",
        count: "06",
        title: "Reusable power system"
      },
      {
        image: "assets/images/ui-10/project/7.jpg",
        count: "07",
        title: "Gas saving system"
      }
    ]
  }

  services = {
    title: "The Best Industry Services",
    subtitle: "High Performance Services For Multiple Insdustries!",
    services: [
      {
        image: "assets/images/ui-10/services/1.jpg",
        icon: "flaticon-oil",
        count: "01",
        title: "Oil & Gas Engineering",
        description: "You can dream, create, design, and build the most wonderful place in the world. But it requires people."
      },
      {
        image: "assets/images/ui-10/services/2.jpg",
        icon: "flaticon-conveyor",
        count: "02",
        title: "Mechanical Engineering",
        description: "You can dream, create, design, and build the most wonderful place in the world. But it requires people."
      },
      {
        image: "assets/images/ui-10/services/3.jpg",
        icon: "flaticon-robotic-arm",
        count: "03",
        title: "Automotive Manufacturing",
        description: "You can dream, create, design, and build the most wonderful place in the world. But it requires people."
      },
      {
        image: "assets/images/ui-10/services/4.jpg",
        icon: "flaticon-helmet",
        count: "04",
        title: "Civil Engineering",
        description: "You can dream, create, design, and build the most wonderful place in the world. But it requires people."
      },
      {
        image: "assets/images/ui-10/services/5.jpg",
        icon: "flaticon-industry",
        count: "05",
        title: "Chemical Research",
        description: "You can dream, create, design, and build the most wonderful place in the world. But it requires people."
      },
      {
        image: "assets/images/ui-10/services/6.jpg",
        icon: "flaticon-scythe",
        count: "06",
        title: "Agricultural Automation",
        description: "You can dream, create, design, and build the most wonderful place in the world. But it requires people."
      }
    ]
  }

  quality = {
    title: "About Quality",
    subtitle: "We're about Quality and Trust.",
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
      },
      {
        count: "26",
        title: "Winning Awards"
      }
    ],
    videoThumb: "assets/images/ui-10/video.jpg",
    videoLink: "https://www.youtube.com/watch?v=c1XNqw2gSbU"
  }

  team = {
    title: "Our Experts",
    subtitle: "We will serve you with the best of our capacity by expert team",
    members: [
      {
        image: "assets/images/ui-10/our-team1/1.jpg",
        name: "Taminm Alows",
        specification: "Architect"
      },
      {
        image: "assets/images/ui-10/our-team1/2.jpg",
        name: "Michael Evens",
        specification: "Architect"
      },
      {
        image: "assets/images/ui-10/our-team1/3.jpg",
        name: "Pamela Smith",
        specification: "Architect"
      },
      {
        image: "assets/images/ui-10/our-team1/4.jpg",
        name: "Taminm Alows",
        specification: "Architect"
      }
    ]
  }

  blogs = {
    title: "Latest Articles Updated Daily",
    subtitle: "We Are Here To Learn You More From Blog",
    latest: {
      image: "assets/images/ui-9/latest-blog/bg-1.jpg",
      date: "15",
      mmyy: "Jan 2021",
      author: "Admin",
      comments: "2",
      title: "Everyone wants to make a profit from their business, for that all of them"
    },
    others: [
      {
        date: "20 Jan 2021",
        comments: "5",
        title: "Research Fundamental",
        description: "It is a long established fact that a reader will be distracted by the readable content."
      },
      {
        date: "22 Jan 2021",
        comments: "5",
        title: "Mechanical Evolution",
        description: "It is a long established fact that a reader will be distracted by the readable content."
      },
      {
        date: "24 Jan 2021",
        comments: "5",
        title: "Future of Manufacturing",
        description: "It is a long established fact that a reader will be distracted by the readable content."
      },
      {
        date: "26 Jan 2021",
        comments: "5",
        title: "Smart Factory Solutions",
        description: "It is a long established fact that a reader will be distracted by the readable content."
      }
    ]
  }

  testimonials = {
    title: "What our client say",
    subtitle: "Happy WIth Customers & Clients",
    quotes: [
      {
        quote: "Today we can tell you, thanks to your passion, hard work creativity, and expertise, you delivered us the most beautiful house.",
        name: "Poul Anderson",
        specification: "Architect",
        image: "assets/images/testimonials/pic1.jpg"
      },
      {
        quote: "Today we can tell you, thanks to your passion, hard work creativity, and expertise, you delivered us the most beautiful house.",
        name: "Michael Evens",
        specification: "Architect",
        image: "assets/images/testimonials/pic2.jpg"
      },
      {
        quote: "Today we can tell you, thanks to your passion, hard work creativity, and expertise, you delivered us the most beautiful house.",
        name: "Pamela Smith",
        specification: "Architect",
        image: "assets/images/testimonials/pic3.jpg"
      },
      {
        quote: "Today we can tell you, thanks to your passion, hard work creativity, and expertise, you delivered us the most beautiful house.",
        name: "Poul Anderson",
        specification: "Architect",
        image: "assets/images/testimonials/pic4.jpg"
      },
      {
        quote: "Today we can tell you, thanks to your passion, hard work creativity, and expertise, you delivered us the most beautiful house.",
        name: "Taminm Alows",
        specification: "Architect",
        image: "assets/images/testimonials/pic1.jpg"
      }
    ]
  }
}
