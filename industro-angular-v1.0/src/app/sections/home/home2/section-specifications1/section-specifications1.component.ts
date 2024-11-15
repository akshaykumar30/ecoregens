import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-specifications1',
  templateUrl: './section-specifications1.component.html',
  styleUrls: ['./section-specifications1.component.css']
})
export class SectionSpecifications1Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
