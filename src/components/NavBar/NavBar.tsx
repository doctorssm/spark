import './NavBar.scss';

import { FolderItem } from '../../contracts/folder-item.interface';
import { NavBarLink } from './NavBarLink/NavBarLink';
import { NavBarList } from './NavBarList/NavBarList';
import NavBarService from '../../services/navbar.service';
import React from 'react';

export class NavBar extends React.Component {
  state = {
    items: []
  };

  onFolderListItemClick = (item: FolderItem): void => {
    console.log(item);
  }

  componentDidMount() {
    this.setState({ items: NavBarService.getFolderItems()});
  }

  render() {
    const { items } = this.state;

    return (
      <nav className="navbar">
        <NavBarLink href={'#'} icon={'inbox'} onClick={() => null}>Входящие</NavBarLink>
        <NavBarLink href={'#'} icon={'calendar-alt'} onClick={() => null}>Календарь</NavBarLink>

        <NavBarList items={items} title={'Папки'} onItemClick={this.onFolderListItemClick} />
      </nav>
    )
  }
}
