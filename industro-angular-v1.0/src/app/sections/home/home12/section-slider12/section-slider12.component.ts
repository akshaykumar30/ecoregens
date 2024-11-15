import { AfterViewInit, Component } from '@angular/core';

declare  var jQuery:  any;
declare  var load_rev_slider_12:  any;

@Component({
  selector: 'app-section-slider12',
  templateUrl: './section-slider12.component.html',
  styleUrls: ['./section-slider12.component.css']
})
export class SectionSlider12Component implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    (function ($) {
      setTimeout(function(){
        load_rev_slider_12();
      }, 100);
    })(jQuery);
  }

}
