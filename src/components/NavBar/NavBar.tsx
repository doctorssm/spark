import './NavBar.scss';

import { NavBarList } from './NavBarList/NavBarList';
import NavBarService from '../../services/navbar.service';
import { NavItem } from '../../contracts';
import React from 'react';

interface NavBarProps {
  title?: string;
  onItemClick: (item: NavItem) => void;
}

export class NavBar extends React.Component<NavBarProps> {
  state = {
    items: []
  };

  componentDidMount() {
    this.setState({ items: NavBarService.getNavItems()});
  }

  render() {
    const { items } = this.state;
    const { title, onItemClick } = this.props;

    return (
      <nav className="navbar">
        <NavBarList items={items} title={title} onItemClick={onItemClick} />
      </nav>
    )
  }
}
