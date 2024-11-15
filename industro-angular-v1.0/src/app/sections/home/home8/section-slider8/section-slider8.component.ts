import { AfterViewInit, Component } from '@angular/core';

declare  var jQuery:  any;
declare  var load_rev_slider_8:  any;

@Component({
  selector: 'app-section-slider8',
  templateUrl: './section-slider8.component.html',
  styleUrls: ['./section-slider8.component.css']
})
export class SectionSlider8Component implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    (function ($) {
      setTimeout(function(){
        load_rev_slider_8();
      }, 100);
    })(jQuery);
  }

}
