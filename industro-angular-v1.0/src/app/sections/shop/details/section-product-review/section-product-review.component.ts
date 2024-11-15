import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-section-product-review',
  templateUrl: './section-product-review.component.html',
  styleUrls: ['./section-product-review.component.css']
})
export class SectionProductReviewComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
