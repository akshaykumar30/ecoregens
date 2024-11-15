import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-self-intro1',
  templateUrl: './section-self-intro1.component.html',
  styleUrls: ['./section-self-intro1.component.css']
})
export class SectionSelfIntro1Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
