import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-blogs10',
  templateUrl: './section-blogs10.component.html',
  styleUrls: ['./section-blogs10.component.css']
})
export class SectionBlogs10Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
