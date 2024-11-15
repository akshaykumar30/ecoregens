import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-section-recent-posts',
  templateUrl: './section-recent-posts.component.html',
  styleUrls: ['./section-recent-posts.component.css']
})
export class SectionRecentPostsComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
