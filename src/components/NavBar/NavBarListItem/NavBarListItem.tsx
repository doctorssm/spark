import React from 'react';

import { NavBarItem, NavBarItemProps } from 'components';

interface NavBarListItemProps extends NavBarItemProps {}

export const NavBarListItem: React.FC<NavBarListItemProps> = (props) => {
  const { item, active, onItemClick } = props;

  return (
    <li className="navbar-list-item">
      <NavBarItem item={item} active={active} onItemClick={onItemClick} />
    </li>
  );
};
