import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-quality2',
  templateUrl: './section-quality2.component.html',
  styleUrls: ['./section-quality2.component.css']
})
export class SectionQuality2Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
