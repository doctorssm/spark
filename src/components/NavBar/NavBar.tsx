import React from 'react';

import { NavBarList } from './NavBarList/NavBarList';
import { NavItem } from '../../contracts';

import './NavBar.scss';

interface NavBarProps {
  items: NavItem[];
  activeItem: NavItem;
  onItemClick: (item: NavItem) => void;
}

export const NavBar: React.FC<NavBarProps> = (props) => {
  const { items, activeItem, onItemClick } = props;

  return (
    <nav className="navbar">
      <NavBarList items={items} activeItem={activeItem} title={'Папки'} onItemClick={onItemClick} />
    </nav>
  );
};
