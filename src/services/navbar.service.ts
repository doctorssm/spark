import axios from 'axios';

import { NavItem } from 'contracts';

export class NavBarService {
  readonly endpoint: string = `https://spark-890bb.firebaseio.com/nav-items.json`;

  get(): Promise<NavItem[]> {
    return axios
      .get<NavItem[]>(this.endpoint)
      .then((res) => res.data)
      .then((data) => Object.values(data));
  }
}

export default new NavBarService();
