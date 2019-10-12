import './NavBarList.scss';

import { NavBarListItem } from '../NavBarListItem/NavBarListItem';
import { NavItem } from '../../../contracts';
import React from 'react'

interface NavBarListProps {
  title?: string;
  items: NavItem[];
  onItemClick: (item: NavItem) => void;
}

export const NavBarList: React.FC<NavBarListProps> = (props) => {
  const { title, items, onItemClick } = props;

  return (
    <>
      <div className="navbar-list-legend">{title}</div>
      <ul className="navbar-list">
        {items.map(item => <NavBarListItem key={item.title} item={item} onItemClick={onItemClick} />)}
      </ul>
    </>
  )
}
