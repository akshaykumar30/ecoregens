import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-icon-fonts',
  templateUrl: './page-icon-fonts.component.html',
  styleUrls: ['./page-icon-fonts.component.css']
})
export class PageIconFontsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    background: "assets/images/banner/1.jpg",
    title: "Icon Fonts",
    crumb: "Icon Fonts"
  }

  fonts = [
    "flaticon-industry",
    "flaticon-stamp",
    "flaticon-trophy",
    "flaticon-magnifying-glass",
    "flaticon-robot-arm",
    "flaticon-conveyor",
    "flaticon-robotic-arm",
    "flaticon-repair",
    "flaticon-layers",
    "flaticon-oil",
    "flaticon-helmet",
    "flaticon-scythe",
    "flaticon-healthcare-and-medical",
    "flaticon-call",
    "flaticon-mail",
    "flaticon-history"
  ]
}
