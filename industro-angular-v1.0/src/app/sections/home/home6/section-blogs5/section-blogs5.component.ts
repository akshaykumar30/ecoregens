import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-blogs5',
  templateUrl: './section-blogs5.component.html',
  styleUrls: ['./section-blogs5.component.css']
})
export class SectionBlogs5Component implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
