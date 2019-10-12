import './NavBarListItem.scss';

import { NavBarItem } from '../NavBarItem/NavBarItem';
import { NavItem } from '../../../contracts';
import React from 'react'

interface NavBarListItemProps { // TODO: extend?
  item: NavItem;
  badge?: number;
  onItemClick: (item: NavItem) => void;
}

export class NavBarListItem extends React.Component<NavBarListItemProps> {
  render() {
    const { item, onItemClick } = this.props;

    return (
      <li className="navbar-list-item">
        <NavBarItem item={item} onItemClick={onItemClick} />
      </li>
    )
  }
}
