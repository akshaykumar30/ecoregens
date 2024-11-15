import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-team-single',
  templateUrl: './page-team-single.component.html',
  styleUrls: ['./page-team-single.component.css']
})
export class PageTeamSingleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    background: "assets/images/banner/7.jpg",
    title: "Team Single",
    crumb: "Team Single"
  }

  about = {
    image: "assets/images/team/pic1.jpg",
    name: "Malcolm Franzcrip",
    speciality: "Contractor",
    description: "The Chief Operating Officer (COO) is responsible for the corporate improvement programme and for driving operational efficiency across Equinor’s eight business areas. The COO also plays a key role in the further development of Equinor. The role of the COO organisation is to drive consistent long term safe and efficient operational performance and value creation.",
    position: "Electrical engineering",
    level: "High",
    experience: "5 Years",
    phone: "987 765 4321",
    email: "malcolm-franzcrip@example.com"
  }
}
