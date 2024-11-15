import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-pricing',
  templateUrl: './page-pricing.component.html',
  styleUrls: ['./page-pricing.component.css']
})
export class PagePricingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    background: "assets/images/banner/2.jpg",
    title: "Our Prices",
    crumb: "Our Prices"
  }

  plans = {
    title: "The Best Industry services",
    subtitle: "High Performance Services For Multiple Insdustries And Technologies!",
    pricing: [
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
  }
}
