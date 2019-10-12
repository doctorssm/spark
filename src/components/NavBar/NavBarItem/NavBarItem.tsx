import './NavBarItem.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { NavItem } from '../../../contracts';
import React from 'react'
import classNames from 'classnames';

interface NavBarItemProps {
  item: NavItem;
  badge?: number;
  onItemClick: (item: NavItem) => void;
}

export class NavBarItem extends React.Component<NavBarItemProps> {
  render() {
    const { item, badge, onItemClick } = this.props;

    return (
      <div className={classNames('navbar-item', { active: item.active })} onClick={() => onItemClick(item)} >
        <span className="navbar-item-icon">
          <FontAwesomeIcon icon={item.icon as IconProp} />
        </span>
        <span className="navbar-item-content">{item.title}</span>
        {badge && <span className="badge badge-pill badge-primary">{badge}</span>}
      </div>
    )
  }
}
