import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-inner-banner',
  templateUrl: './section-inner-banner.component.html',
  styleUrls: ['./section-inner-banner.component.css']
})
export class SectionInnerBannerComponent implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
