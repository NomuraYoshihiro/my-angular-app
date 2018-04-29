import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Team } from '../team';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent implements OnInit {
  @Input() team: Team;
  @Output() champion = new EventEmitter<number>;

  constructor() { }

  ngOnInit() {
  }

  onClickTeam(id: number) {
    this.champion.emit(id);
  }

}
