import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-plans1',
  templateUrl: './section-plans1.component.html',
  styleUrls: ['./section-plans1.component.css']
})
export class SectionPlans1Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
