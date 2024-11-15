import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-plans3',
  templateUrl: './section-plans3.component.html',
  styleUrls: ['./section-plans3.component.css']
})
export class SectionPlans3Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
