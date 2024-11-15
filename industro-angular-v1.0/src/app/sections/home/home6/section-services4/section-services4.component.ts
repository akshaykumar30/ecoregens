import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-services4',
  templateUrl: './section-services4.component.html',
  styleUrls: ['./section-services4.component.css']
})
export class SectionServices4Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
