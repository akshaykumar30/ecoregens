import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-team5',
  templateUrl: './section-team5.component.html',
  styleUrls: ['./section-team5.component.css']
})
export class SectionTeam5Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
