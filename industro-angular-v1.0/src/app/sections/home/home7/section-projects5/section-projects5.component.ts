import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-projects5',
  templateUrl: './section-projects5.component.html',
  styleUrls: ['./section-projects5.component.css']
})
export class SectionProjects5Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
