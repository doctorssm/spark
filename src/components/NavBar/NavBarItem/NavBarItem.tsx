import React from 'react';
import classNames from 'classnames';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { NavItem } from '../../../contracts';

import './NavBarItem.scss';

export interface NavBarItemProps {
  item: NavItem;
  onItemClick: (item: NavItem) => void;
}

export const NavBarItem: React.FC<NavBarItemProps> = (props) => {
  const { item, onItemClick } = props;

  return (
    <div className={classNames('navbar-item', { active: item.active })} onClick={() => onItemClick(item)}>
      <span className="navbar-item-icon">
        <FontAwesomeIcon icon={item.icon as IconProp} />
      </span>
      <span className="navbar-item-content">{item.title}</span>
    </div>
  );
};
