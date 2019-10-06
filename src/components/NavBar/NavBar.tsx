import './NavBar.scss';

import { FolderItem } from '../../contracts';
import { NavBarLink } from './NavBarLink/NavBarLink';
import { NavBarList } from './NavBarList/NavBarList';
import NavBarService from '../../services/navbar.service';
import React from 'react';

export class NavBar extends React.Component {
  state = {
    items: []
  };

  onFolderListItemClick = (item: FolderItem): void => {
    const items = this.state.items.map((i: FolderItem)  => {
      i.active = item.type === i.type;
      return i;
    });

    this.setState({ items });
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
