import { AfterViewInit, Component } from '@angular/core';

declare  var jQuery:  any;
declare  var load_rev_slider_9:  any;

@Component({
  selector: 'app-section-slider9',
  templateUrl: './section-slider9.component.html',
  styleUrls: ['./section-slider9.component.css']
})
export class SectionSlider9Component implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    (function ($) {
      setTimeout(function(){
        load_rev_slider_9();
      }, 100);
    })(jQuery);
  }

}
