import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-team4',
  templateUrl: './section-team4.component.html',
  styleUrls: ['./section-team4.component.css']
})
export class SectionTeam4Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
