import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-product-table',
  templateUrl: './section-product-table.component.html',
  styleUrls: ['./section-product-table.component.css']
})
export class SectionProductTableComponent implements OnInit {

  @Input() data: any;
  @Input() cart: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
