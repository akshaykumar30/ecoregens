import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-call-us1',
  templateUrl: './section-call-us1.component.html',
  styleUrls: ['./section-call-us1.component.css']
})
export class SectionCallUs1Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
