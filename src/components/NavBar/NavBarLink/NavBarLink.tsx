import { NavBarItem } from '../NavBarItem/NavBarItem';
import { NavItem } from '../../../contracts';
import React from 'react'

interface NavBarLinkProps {
  href: string;
  icon?: string;
  onClick: (item: NavItem) => void;
}

export class NavBarLink extends React.Component<NavBarLinkProps> {
  render() {
    const { href, icon, children, onClick } = this.props;

    return (
      <a href={href} className="navbar-link">
        <NavBarItem item={{ icon, title: children } as NavItem} onItemClick={onClick}>{children}</NavBarItem>
      </a>
    )
  }
}
