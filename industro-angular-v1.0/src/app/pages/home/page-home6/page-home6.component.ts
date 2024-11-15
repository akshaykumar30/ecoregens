import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-home6',
  templateUrl: './page-home6.component.html',
  styleUrls: ['./page-home6.component.css']
})
export class PageHome6Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  services = [
    {
      image: "assets/images/solar-icon/1.png",
      title: "Solar Wind",
      description: "Lorem Ipsum is simply dummy text of the printing and type setting."
    },
    {
      image: "assets/images/solar-icon/2.png",
      title: "PV Solar Panel",
      description: "Lorem Ipsum is simply dummy text of the printing and type setting."
    },
    {
      image: "assets/images/solar-icon/4.png",
      title: "Solar Water Heater",
      description: "Lorem Ipsum is simply dummy text of the printing and type setting."
    },
    {
      image: "assets/images/solar-icon/3.png",
      title: "Solar Plates",
      description: "Lorem Ipsum is simply dummy text of the printing and type setting."
    }
  ]

  projects = {
    title: "Explore Recent Work",
    subtitle: "We've Done Lot's Projects Let's Check Some Here",
    projects: [
      {
        category: "cat-1",
        image: "assets/images/solar-icon/gallery/pic1.jpg",
        detailImage: "assets/images/gallery/thumb/pic1.jpg",
        title: "Solar Thermal Systems"
      },
      {
        category: "cat-2",
        image: "assets/images/solar-icon/gallery/pic2.jpg",
        detailImage: "assets/images/gallery/thumb/pic2.jpg",
        title: "Residential Solutions"
      },
      {
        category: "cat-3",
        image: "assets/images/solar-icon/gallery/pic3.jpg",
        detailImage: "assets/images/gallery/thumb/pic4.jpg",
        title: "Commercial solutions"
      },
      {
        category: "cat-4",
        image: "assets/images/solar-icon/gallery/pic4.jpg",
        detailImage: "assets/images/gallery/thumb/pic3.jpg",
        title: "Residential EV Chargers"
      },
      {
        category: "cat-5",
        image: "assets/images/solar-icon/gallery/pic5.jpg",
        detailImage: "assets/images/gallery/thumb/pic5.jpg",
        title: "Residential Solutions"
      },
      {
        category: "cat-4",
        image: "assets/images/solar-icon/gallery/pic6.jpg",
        detailImage: "assets/images/gallery/thumb/pic6.jpg",
        title: "Solar Thermal Systems"
      }
    ]
  }

  about = {
    title: "Easy to Use",
    subtitle: "It's Safe Compared To Electricity",
    image: "assets/images/solar-icon/img-1.png",
    specifications: [
      {
        image: "assets/images/solar-icon/2.png",
        title: "Solar Plates",
        description: "Vitae adipiscing turpis. Aenean ligula nibh, molestie id viverra."
      },
      {
        image: "assets/images/solar-icon/1.png",
        title: "Solar Wind",
        description: "Vitae adipiscing turpis. Aenean ligula nibh, molestie id viverra."
      },
      {
        image: "assets/images/solar-icon/4.png",
        title: "Solar Water Heater",
        description: "Vitae adipiscing turpis. Aenean ligula nibh, molestie id viverra."
      }
    ]
  }

  howWeWork = {
    title: "Steps of cooperation",
    subtitle: "How We work",
    work: [
      {
        count: "01",
        title: "Enviroment Analitic",
        description: "Progressively maintain extensive infomediaries via extensible nich. Capitalize on low hanging fruit."
      },
      {
        count: "02",
        title: "Preparing Documentation",
        description: "Progressively maintain extensive infomediaries via extensible nich. Capitalize on low hanging fruit."
      },
      {
        count: "03",
        title: "Equipment Installation",
        description: "Progressively maintain extensive infomediaries via extensible nich. Capitalize on low hanging fruit."
      },
      {
        count: "04",
        title: "Technical Support",
        description: "Progressively maintain extensive infomediaries via extensible nich. Capitalize on low hanging fruit."
      },
      {
        count: "05",
        title: "Payment Method",
        description: "Progressively maintain extensive infomediaries via extensible nich. Capitalize on low hanging fruit."
      },
      {
        count: "06",
        title: "Enviroment Analitic",
        description: "Progressively maintain extensive infomediaries via extensible nich. Capitalize on low hanging fruit."
      }
    ]
  }

  video = {
    title: "All Solutions",
    subtitle: "Get A Solution For All Industries",
    videoLink: "https://www.youtube.com/watch?v=fgExvIUYg5w",
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
    ]
  }

  blogs = {
    title: "Latest Articles Updated Daily",
    subtitle: "We Are Here To Learn You More From Blog",
    blogs: [
      {
        image: "assets/images/solar-icon/default/thum1.jpg",
        date: "14, March",
        comments: "24",
        title: "Avoid Solar Panels Damage Your Top Roof"
      },
      {
        image: "assets/images/solar-icon/default/thum2.jpg",
        date: "14, March",
        comments: "24",
        title: "How To Get Your Expected Solar Production"
      },
      {
        image: "assets/images/solar-icon/default/thum3.jpg",
        date: "14, March",
        comments: "24",
        title: "Home Solar Power, Reuse, By Maintainance"
      }
    ]
  }

  clients = {
    bgcolor: "bg-white",
    clients: [
      "assets/images/solar-icon/client-logo/w1.png",
      "assets/images/solar-icon/client-logo/w2.png",
      "assets/images/solar-icon/client-logo/w3.png",
      "assets/images/solar-icon/client-logo/w4.png",
      "assets/images/solar-icon/client-logo/w5.png",
      "assets/images/solar-icon/client-logo/w6.png",
      "assets/images/solar-icon/client-logo/w7.png"
    ]
  }

  plans = [
    {
      image: "assets/images/solar-icon/2.png",
      price: "29",
      plan: "Basic",
      includes: "Free Service, Open Circuit, Power Watts, Output tolerance, Maximum Power Voltage"
    },
    {
      image: "assets/images/solar-icon/3.png",
      price: "49",
      plan: "Standard",
      includes: "Free Service, Open Circuit, Power Watts, Output tolerance, Maximum Power Voltage"
    },
    {
      image: "assets/images/solar-icon/4.png",
      price: "99",
      plan: "Advanced",
      includes: "Free Service, Open Circuit, Power Watts, Output tolerance, Maximum Power Voltage"
    }
  ]
}
