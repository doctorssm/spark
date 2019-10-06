import './NavBarItem.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import React from 'react'

interface NavBarItemProps {
  icon?: string;
}

export class NavBarItem extends React.Component<NavBarItemProps> {
  render() {
    const { icon, children } = this.props;

    return (
      <div className="navbar-item">
        <span className="navbar-item-icon">
          <FontAwesomeIcon icon={icon as IconProp} />
        </span>
        <span className="navbar-item-content">{children}</span>
      </div>
    )
  }
}
