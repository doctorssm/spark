import React from 'react';

import { NavBarList } from './NavBarList/NavBarList';
import { NavItem } from '../../contracts';

import './NavBar.scss';

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
  );
};
