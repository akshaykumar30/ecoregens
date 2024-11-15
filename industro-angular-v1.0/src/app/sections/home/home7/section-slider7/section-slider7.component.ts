import { AfterViewInit, Component } from '@angular/core';

declare  var jQuery:  any;
declare  var load_rev_slider_7:  any;

@Component({
  selector: 'app-section-slider7',
  templateUrl: './section-slider7.component.html',
  styleUrls: ['./section-slider7.component.css']
})
export class SectionSlider7Component implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    (function ($) {
      setTimeout(function(){
        load_rev_slider_7();
      }, 100);
    })(jQuery);
  }

}
