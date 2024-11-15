import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-blogs6',
  templateUrl: './section-blogs6.component.html',
  styleUrls: ['./section-blogs6.component.css']
})
export class SectionBlogs6Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
