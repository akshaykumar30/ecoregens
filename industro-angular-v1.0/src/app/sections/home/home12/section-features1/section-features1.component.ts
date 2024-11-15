import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-features1',
  templateUrl: './section-features1.component.html',
  styleUrls: ['./section-features1.component.css']
})
export class SectionFeatures1Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
