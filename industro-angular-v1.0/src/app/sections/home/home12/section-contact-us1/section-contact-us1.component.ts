import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-contact-us1',
  templateUrl: './section-contact-us1.component.html',
  styleUrls: ['./section-contact-us1.component.css']
})
export class SectionContactUs1Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
