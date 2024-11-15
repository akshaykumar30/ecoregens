import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-gallery3',
  templateUrl: './section-gallery3.component.html',
  styleUrls: ['./section-gallery3.component.css']
})
export class SectionGallery3Component implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
