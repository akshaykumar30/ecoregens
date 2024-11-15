import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-vision1',
  templateUrl: './section-vision1.component.html',
  styleUrls: ['./section-vision1.component.css']
})
export class SectionVision1Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
