import { AfterViewInit, Component } from '@angular/core';

declare  var jQuery:  any;
declare  var load_rev_slider_11:  any;

@Component({
  selector: 'app-section-slider11',
  templateUrl: './section-slider11.component.html',
  styleUrls: ['./section-slider11.component.css']
})
export class SectionSlider11Component implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    (function ($) {
      setTimeout(function(){
        load_rev_slider_11();
      }, 100);
    })(jQuery);
  }

}
