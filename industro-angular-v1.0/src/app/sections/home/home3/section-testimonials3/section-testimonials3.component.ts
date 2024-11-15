import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-testimonials3',
  templateUrl: './section-testimonials3.component.html',
  styleUrls: ['./section-testimonials3.component.css']
})
export class SectionTestimonials3Component implements OnInit {

  @Input() data: any;
  @Input() whiteBox: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
