import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-how-we-work1',
  templateUrl: './section-how-we-work1.component.html',
  styleUrls: ['./section-how-we-work1.component.css']
})
export class SectionHowWeWork1Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
