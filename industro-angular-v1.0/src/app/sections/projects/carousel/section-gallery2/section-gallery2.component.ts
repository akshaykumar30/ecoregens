import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-gallery2',
  templateUrl: './section-gallery2.component.html',
  styleUrls: ['./section-gallery2.component.css']
})
export class SectionGallery2Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
