import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-blogs4',
  templateUrl: './section-blogs4.component.html',
  styleUrls: ['./section-blogs4.component.css']
})
export class SectionBlogs4Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
