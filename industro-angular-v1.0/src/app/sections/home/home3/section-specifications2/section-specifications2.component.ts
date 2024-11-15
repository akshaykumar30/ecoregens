import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-specifications2',
  templateUrl: './section-specifications2.component.html',
  styleUrls: ['./section-specifications2.component.css']
})
export class SectionSpecifications2Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
