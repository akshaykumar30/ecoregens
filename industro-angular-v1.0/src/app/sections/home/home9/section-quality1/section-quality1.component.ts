import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-quality1',
  templateUrl: './section-quality1.component.html',
  styleUrls: ['./section-quality1.component.css']
})
export class SectionQuality1Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
