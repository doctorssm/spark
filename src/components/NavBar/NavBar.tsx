import './NavBar.scss';

import { FolderList } from '../FolderList/FolderList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavBarService from '../../services/nav-bar.service';
import React from 'react';

export class NavBar extends React.Component {
  componentDidMount() {

  }

  render() {
    return (
      <nav className="nav">
        <ul className="side-bar-list">
          <li><FontAwesomeIcon icon={'inbox'} />Входящие</li>
          <li><FontAwesomeIcon icon={'calendar-alt'} />Календарь</li>
        </ul>



        <FolderList title={'Папки'} items={NavBarService.getFolderItems()} />
      </nav>
    )
  }
}
