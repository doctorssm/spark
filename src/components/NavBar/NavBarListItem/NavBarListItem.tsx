import './NavBarListItem.scss';

import { FolderItem } from '../../../contracts/folder-item.interface';
import { NavBarItem } from '../NavBarItem/NavBarItem';
import React from 'react'

interface NavBarListItemProps {
  item: FolderItem;
}

export class NavBarListItem extends React.Component<NavBarListItemProps> {
  render() {
    const { item } = this.props;

    return (
      <li className="navbar-list-item">
        <NavBarItem icon={item.icon} >{item.title}</NavBarItem>
      </li>
    )
  }
}
