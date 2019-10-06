import { NavBarItem } from '../NavBarItem/NavBarItem';
import React from 'react'

interface NavBarLinkProps {
  href: string;
  icon?: string;
  content: string;
}

export class NavBarLink extends React.Component<NavBarLinkProps> {
  render() {
    const { href, icon, content } = this.props;

    return (
      <a href={href} className="navbar-link">
        <NavBarItem content={content} icon={icon} />
      </a>
    )
  }
}
