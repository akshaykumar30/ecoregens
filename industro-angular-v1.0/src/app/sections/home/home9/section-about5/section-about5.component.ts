import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-about5',
  templateUrl: './section-about5.component.html',
  styleUrls: ['./section-about5.component.css']
})
export class SectionAbout5Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
