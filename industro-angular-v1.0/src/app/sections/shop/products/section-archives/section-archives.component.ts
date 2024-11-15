import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-archives',
  templateUrl: './section-archives.component.html',
  styleUrls: ['./section-archives.component.css']
})
export class SectionArchivesComponent implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
