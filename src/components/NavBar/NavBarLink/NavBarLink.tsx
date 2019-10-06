import { NavBarItem } from '../NavBarItem/NavBarItem';
import React from 'react'

interface NavBarLinkProps {
  href: string;
  icon?: string;
}

export class NavBarLink extends React.Component<NavBarLinkProps> {
  render() {
    const { href, icon, children } = this.props;

    return (
      <a href={href} className="navbar-link">
        <NavBarItem icon={icon} >{children}</NavBarItem>
      </a>
    )
  }
}
