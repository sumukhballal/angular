import { Component, OnInit } from '@angular/core';

import { leaders } from '../shared/leaders';
import { LeaderService } from '../services/leader.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  LEADERS: leaders[];
  constructor(private leaderservice: LeaderService) { }

  ngOnInit() {
  this.LEADERS= this.leaderservice.getLeaders();
  }

}
