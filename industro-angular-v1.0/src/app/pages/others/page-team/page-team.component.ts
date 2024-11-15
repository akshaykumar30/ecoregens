import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-team',
  templateUrl: './page-team.component.html',
  styleUrls: ['./page-team.component.css']
})
export class PageTeamComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    background: "assets/images/banner/7.jpg",
    title: "Team",
    crumb: "Team"
  }

  team1 = {
    title: "Our Experts",
    subtitle: "We will serve you with the best of our capacity by expert team",
    boxWidth: "col-lg-3",
    members: [
      {
        image: "assets/images/team/pic1.jpg",
        name: "Malcolm Franzcrip",
        post: "Contractor"
      },
      {
        image: "assets/images/team/pic2.jpg",
        name: "Froster Collings",
        post: "Contractor"
      },
      {
        image: "assets/images/team/pic3.jpg",
        name: "Melena Marshall",
        post: "Contractor"
      },
      {
        image: "assets/images/team/pic2.jpg",
        name: "Froster Collings",
        post: "Contractor"
      }
    ]
  }

  team2 = {
    title: "Our Experts",
    subtitle: "We will serve you with the best of our capacity by expert team",
    bgImage: "assets/images/background/bg-map.png",
    members: [
      {
        image: "assets/images/team/pic1.jpg",
        name: "Malcolm Franzcrip",
        post: "Contractor"
      },
      {
        image: "assets/images/team/pic2.jpg",
        name: "Froster Collings",
        post: "Contractor"
      },
      {
        image: "assets/images/team/pic3.jpg",
        name: "Melena Marshall",
        post: "Contractor"
      }
    ]
  }
}
