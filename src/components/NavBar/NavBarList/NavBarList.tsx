import React from 'react';

import { NavBarListItem } from '../NavBarListItem/NavBarListItem';
import { NavItem } from '../../../contracts';

import './NavBarList.scss';

interface NavBarListProps {
  title?: string;
  items: NavItem[];
  activeItem: NavItem;
  onItemClick: (item: NavItem) => void;
}

export const NavBarList: React.FC<NavBarListProps> = (props) => {
  const { title, items, activeItem, onItemClick } = props;

  const isActive = (item: NavItem): boolean => {
    return item.type === activeItem.type;
  };

  return (
    <>
      <div className="navbar-list-legend">{title}</div>
      <ul className="navbar-list">
        {items.map((item) => (
          <NavBarListItem key={item.title} item={item} active={isActive(item)} onItemClick={onItemClick} />
        ))}
      </ul>
    </>
  );
};
