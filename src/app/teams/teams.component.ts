import { Component, OnInit } from '@angular/core';
import { Team } from '../team';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  selected: Team;
  championId: number;

  teams = [
    { id: 1, name: 'レアル・マドリード', league: 'リーガ・エスパニョーラ' },
    { id: 2, name: 'FCバイエルン・ミュンヘン', league: 'ブンデスリーガ' },
    { id: 3, name: 'ASローマ', league: 'セリエA' },
    { id: 4, name: 'リバプールFC', league: 'プレミアリーグ' },
  ];

  constructor() { }

  ngOnInit() {
  }

  onClickTeam(team: Team) {
    this.selected = team;
  }

  selectChampion(id: number) {
    this.championId = id;
  }
}
