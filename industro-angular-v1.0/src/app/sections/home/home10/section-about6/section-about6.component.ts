import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-about6',
  templateUrl: './section-about6.component.html',
  styleUrls: ['./section-about6.component.css']
})
export class SectionAbout6Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
