import { AfterViewInit, Component } from '@angular/core';

declare  var jQuery:  any;
declare  var load_rev_slider_10:  any;

@Component({
  selector: 'app-section-slider10',
  templateUrl: './section-slider10.component.html',
  styleUrls: ['./section-slider10.component.css']
})
export class SectionSlider10Component implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    (function ($) {
      setTimeout(function(){
        load_rev_slider_10();
      }, 100);
    })(jQuery);
  }

}
