import './NavBar.scss';

import { NavBarLink } from './NavBarLink/NavBarLink';
import { NavBarList } from './NavBarList/NavBarList';
import NavBarService from '../../services/navbar.service';
import React from 'react';

export class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navbar-link-group">
          <NavBarLink href={'#'} icon={'inbox'} content={'Входящие'} />
          <NavBarLink href={'#'} icon={'calendar-alt'} content={'Календарь'} />
        </div>

        <NavBarList items={NavBarService.getFolderItems()} title={'Папки'} />
      </nav>
    )
  }
}
