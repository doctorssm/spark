import './NavBarList.scss';

import { FolderItem } from '../../../contracts/folder-item.interface';
import { NavBarListItem } from '../NavBarListItem/NavBarListItem';
import React from 'react'

interface NavBarListProps {
  title?: string;
  items: FolderItem[]; // TODO: NavBarItem?
}

export class NavBarList extends React.PureComponent<NavBarListProps> {
  render() {
    const { title, items } = this.props;

    return (
      <>
        <div className="navbar-list-legend">{title}</div>
        <ul className="navbar-list">
          {items.map(item => <NavBarListItem item={item} />)}
        </ul>
      </>
    )
  }
}
