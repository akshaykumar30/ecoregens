import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-video3',
  templateUrl: './section-video3.component.html',
  styleUrls: ['./section-video3.component.css']
})
export class SectionVideo3Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
