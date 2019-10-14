import React from 'react';

import { NavBarItem, NavBarItemProps } from '../NavBarItem/NavBarItem';

interface NavBarListItemProps extends NavBarItemProps {}

export const NavBarListItem: React.FC<NavBarListItemProps> = (props) => {
  const { item, onItemClick } = props;

  return (
    <li className="navbar-list-item">
      <NavBarItem item={item} onItemClick={onItemClick} />
    </li>
  );
};
