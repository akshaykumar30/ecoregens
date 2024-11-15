import { Component, Inject, Input, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-page-service-detail',
  templateUrl: './page-service-detail.component.html',
  styleUrls: ['./page-service-detail.component.css']
})
export class PageServiceDetailComponent implements OnInit {

  @Input() loadingurl: any;

  constructor(private router: Router, @Inject(DOCUMENT) private document: Document) {
    
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.loadingurl = event.url.split("/")[2]
      });
  }

  ngOnInit(): void {
  }

  banner = {
    background: "assets/images/banner/2.jpg",
    title: "Service Detail",
    crumb: "Service Detail"
  }
}
