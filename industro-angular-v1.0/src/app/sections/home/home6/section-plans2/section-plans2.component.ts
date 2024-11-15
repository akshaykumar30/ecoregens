import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-plans2',
  templateUrl: './section-plans2.component.html',
  styleUrls: ['./section-plans2.component.css']
})
export class SectionPlans2Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
