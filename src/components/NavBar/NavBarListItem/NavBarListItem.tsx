import React from 'react';

import { NavBarItem } from '../NavBarItem/NavBarItem';
import { NavItem } from '../../../contracts';

import './NavBarListItem.scss';

interface NavBarListItemProps {
  // TODO: extend?
  item: NavItem;
  onItemClick: (item: NavItem) => void;
}

export const NavBarListItem: React.FC<NavBarListItemProps> = (props) => {
  const { item, onItemClick } = props;

  return (
    <li className="navbar-list-item">
      <NavBarItem item={item} onItemClick={onItemClick} />
    </li>
  );
};
