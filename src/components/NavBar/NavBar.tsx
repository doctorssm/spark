import './NavBar.scss';

import { NavBarList } from './NavBarList/NavBarList';
import { NavItem } from '../../contracts';
import React from 'react';

interface NavBarProps {
  items: NavItem[];
  onItemClick: (item: NavItem) => void;
}

export const NavBar: React.FC<NavBarProps> = (props) => {
  const { items, onItemClick } = props;

  return (
    <nav className="navbar">
      <NavBarList items={items} title={'Папки'} onItemClick={onItemClick} />
    </nav>
  )
}
