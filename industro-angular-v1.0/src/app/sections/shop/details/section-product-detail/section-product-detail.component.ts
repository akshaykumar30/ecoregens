import { Component, Input, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

declare var jQuery: any;
declare var setupProductDetailSlider: any;

@Component({
  selector: 'app-section-product-detail',
  templateUrl: './section-product-detail.component.html',
  styleUrls: ['./section-product-detail.component.css']
})

export class SectionProductDetailComponent implements OnInit {

  @Input() data: any;
  
  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    (function ($) {
      setTimeout(function () {
        this.setupProductDetailSlider();
      }, 500);
    })(jQuery);
  }

}
