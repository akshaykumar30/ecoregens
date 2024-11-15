import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-call-us2',
  templateUrl: './section-call-us2.component.html',
  styleUrls: ['./section-call-us2.component.css']
})
export class SectionCallUs2Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
