import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-blogs3',
  templateUrl: './section-blogs3.component.html',
  styleUrls: ['./section-blogs3.component.css']
})
export class SectionBlogs3Component implements OnInit {

  @Input() data: any;
  @Input() wide: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
