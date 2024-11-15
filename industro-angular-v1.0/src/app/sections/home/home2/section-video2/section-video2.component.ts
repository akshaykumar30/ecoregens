import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-video2',
  templateUrl: './section-video2.component.html',
  styleUrls: ['./section-video2.component.css']
})
export class SectionVideo2Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
