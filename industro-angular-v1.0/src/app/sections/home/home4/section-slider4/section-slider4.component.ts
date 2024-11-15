import { AfterViewInit, Component } from '@angular/core';

declare  var jQuery:  any;
declare  var load_rev_slider_4:  any;

@Component({
  selector: 'app-section-slider4',
  templateUrl: './section-slider4.component.html',
  styleUrls: ['./section-slider4.component.css']
})
export class SectionSlider4Component implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    (function ($) {
      setTimeout(function(){
        load_rev_slider_4();
      }, 100);
    })(jQuery);
  }

}
