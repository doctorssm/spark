import './NavBar.scss';

import { FolderItem, NavItem } from '../../contracts';
import { NavBarLink } from './NavBarLink/NavBarLink';
import { NavBarList } from './NavBarList/NavBarList';
import NavBarService from '../../services/navbar.service';
import React from 'react';

interface NavBarProps {
  onFolderSelectionChange: (item: FolderItem) => void;
}

export class NavBar extends React.Component<NavBarProps> {
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
    const { onFolderSelectionChange } = this.props;

    return (
      <nav className="navbar">
        <NavBarLink href={'#'} icon={'inbox'} onClick={() => null}>Входящие</NavBarLink>
        <NavBarLink href={'#'} icon={'calendar-alt'} onClick={() => null}>Календарь</NavBarLink>

        <NavBarList items={items} title={'Папки'} onItemClick={onFolderSelectionChange} />
      </nav>
    )
  }
}
