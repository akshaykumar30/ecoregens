import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-get-in-touch1',
  templateUrl: './section-get-in-touch1.component.html',
  styleUrls: ['./section-get-in-touch1.component.css']
})
export class SectionGetInTouch1Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
