import './NavBarItem.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import React from 'react'

interface NavBarItemProps {
  content: string;
  icon?: string;
}

export class NavBarItem extends React.Component<NavBarItemProps> {
  render() {
    const { icon, content } = this.props;

    return (
      <div className="navbar-item">
        <span className="navbar-item-icon">
          <FontAwesomeIcon icon={icon as IconProp} />
        </span>
        <span className="navbar-item-content">{content}</span>
      </div>
    )
  }
}
