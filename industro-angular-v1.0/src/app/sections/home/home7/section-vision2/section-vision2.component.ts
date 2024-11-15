import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-vision2',
  templateUrl: './section-vision2.component.html',
  styleUrls: ['./section-vision2.component.css']
})
export class SectionVision2Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
