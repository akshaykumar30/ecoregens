import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-section-categories',
  templateUrl: './section-categories.component.html',
  styleUrls: ['./section-categories.component.css']
})
export class SectionCategoriesComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
