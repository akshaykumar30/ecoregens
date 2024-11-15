import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-video4',
  templateUrl: './section-video4.component.html',
  styleUrls: ['./section-video4.component.css']
})
export class SectionVideo4Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
