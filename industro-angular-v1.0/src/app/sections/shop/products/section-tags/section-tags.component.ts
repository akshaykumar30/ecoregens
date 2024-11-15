import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-section-tags',
  templateUrl: './section-tags.component.html',
  styleUrls: ['./section-tags.component.css']
})
export class SectionTagsComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
