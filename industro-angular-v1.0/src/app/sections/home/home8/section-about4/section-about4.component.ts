import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-about4',
  templateUrl: './section-about4.component.html',
  styleUrls: ['./section-about4.component.css']
})
export class SectionAbout4Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
