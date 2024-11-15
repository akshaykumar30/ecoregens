import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-video1',
  templateUrl: './section-video1.component.html',
  styleUrls: ['./section-video1.component.css']
})
export class SectionVideo1Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
