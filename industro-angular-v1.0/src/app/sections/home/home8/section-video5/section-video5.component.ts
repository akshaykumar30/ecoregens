import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-video5',
  templateUrl: './section-video5.component.html',
  styleUrls: ['./section-video5.component.css']
})
export class SectionVideo5Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
