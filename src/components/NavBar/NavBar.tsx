import './NavBar.scss';

import { FolderItem, NavItem } from '../../contracts';

import EmailService from '../../services/email.service';
import { NavBarLink } from './NavBarLink/NavBarLink';
import { NavBarList } from './NavBarList/NavBarList';
import NavBarService from '../../services/navbar.service';
import React from 'react';

interface NavBarProps {
  title?: string;
  onItemClick: (item: FolderItem | null) => void;
}

export class NavBar extends React.Component<NavBarProps> {
  state = {
    items: []
  };

  componentDidMount() {
    this.setState({ items: NavBarService.getFolderItems()});
  }

  render() {
    const { items } = this.state;
    const { title, onItemClick } = this.props;

    return (
      <nav className="navbar">
        <NavBarLink href={'#'} icon={'inbox'} badge={4} onClick={() => onItemClick(null)}>Входящие</NavBarLink>

        <NavBarList items={items} title={title} onItemClick={onItemClick} />
      </nav>
    )
  }
}
