import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-testimonials5',
  templateUrl: './section-testimonials5.component.html',
  styleUrls: ['./section-testimonials5.component.css']
})
export class SectionTestimonials5Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
