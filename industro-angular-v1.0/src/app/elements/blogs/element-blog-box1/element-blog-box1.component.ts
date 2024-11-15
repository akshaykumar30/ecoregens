import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-element-blog-box1',
  templateUrl: './element-blog-box1.component.html',
  styleUrls: ['./element-blog-box1.component.css']
})
export class ElementBlogBox1Component implements OnInit {

  @Input() object: any;
  @Input() titleLink: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
