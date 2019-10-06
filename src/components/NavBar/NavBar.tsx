import './NavBar.scss';

import { FolderList } from '../FolderList/FolderList';
import React from 'react';

export class NavBar extends React.Component {
  render() {
    return (
      <nav className="nav">
        NAVIGATION
        <FolderList />
      </nav>
    )
  }
}
