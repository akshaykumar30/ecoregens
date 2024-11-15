import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-team3',
  templateUrl: './section-team3.component.html',
  styleUrls: ['./section-team3.component.css']
})
export class SectionTeam3Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
