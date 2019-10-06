import './NavBar.scss';

import { NavBarLink } from './NavBarLink/NavBarLink';
import { NavBarList } from './NavBarList/NavBarList';
import NavBarService from '../../services/navbar.service';
import React from 'react';

export class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <NavBarLink href={'#'} icon={'inbox'}>Входящие</NavBarLink>
        <NavBarLink href={'#'} icon={'calendar-alt'}>Календарь</NavBarLink>

        <NavBarList items={NavBarService.getFolderItems()} title={'Папки'} />
      </nav>
    )
  }
}
