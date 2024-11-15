import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-welcome1',
  templateUrl: './section-welcome1.component.html',
  styleUrls: ['./section-welcome1.component.css']
})
export class SectionWelcome1Component implements OnInit {

  @Input() data:any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
