import './NavBar.scss';

import { FolderList } from '../FolderList/FolderList';
import NavBarService from '../../services/nav-bar.service';
import React from 'react';

export class NavBar extends React.Component {
  componentDidMount() {

  }

  render() {
    return (
      <nav className="nav">
        NAVIGATION
        <FolderList items={NavBarService.getFolderItems()} />
      </nav>
    )
  }
}
