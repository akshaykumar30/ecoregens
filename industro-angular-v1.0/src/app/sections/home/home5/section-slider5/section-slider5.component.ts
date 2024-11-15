import { AfterViewInit, Component } from '@angular/core';

declare  var jQuery:  any;
declare  var load_rev_slider_5:  any;

@Component({
  selector: 'app-section-slider5',
  templateUrl: './section-slider5.component.html',
  styleUrls: ['./section-slider5.component.css']
})
export class SectionSlider5Component implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    (function ($) {
      setTimeout(function(){
        load_rev_slider_5();
      }, 100);
    })(jQuery);
  }

}
