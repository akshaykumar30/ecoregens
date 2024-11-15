import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-testimonials4',
  templateUrl: './section-testimonials4.component.html',
  styleUrls: ['./section-testimonials4.component.css']
})
export class SectionTestimonials4Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
