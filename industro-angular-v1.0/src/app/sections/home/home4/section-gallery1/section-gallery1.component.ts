import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-gallery1',
  templateUrl: './section-gallery1.component.html',
  styleUrls: ['./section-gallery1.component.css']
})
export class SectionGallery1Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
