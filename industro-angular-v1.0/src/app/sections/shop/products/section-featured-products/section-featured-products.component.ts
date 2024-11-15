import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-section-featured-products',
  templateUrl: './section-featured-products.component.html',
  styleUrls: ['./section-featured-products.component.css']
})
export class SectionFeaturedProductsComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
