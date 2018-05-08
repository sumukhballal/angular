import { Injectable } from '@angular/core';

import { LEADERS } from '../shared/leader';
import { leaders } from '../shared/leaders';

@Injectable()
export class LeaderService {

  constructor() { }

  getLeaders(): leaders[]{
    return LEADERS;
  }

  getLeader(id: number): leaders {
    return LEADERS.filter((leader) => (leader.id == id))[0];
  }

  getFeaturedLeader(): leaders {
    return LEADERS.filter((leader) => (leader.featured))[0];
  }
}
