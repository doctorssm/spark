import './FolderList.scss';

import { FolderItem } from '../../contracts/folder-item.interface';
import { FolderListItem } from '../FolderListItem/FolderListItem';
import React from 'react'

interface FolderListProps {
  title: string;
  items: FolderItem[];
}

export class FolderList extends React.PureComponent<FolderListProps> {
  render() {
    const { title, items } = this.props;
    return (
      <div className="folder-list">
        <div className="folder-list-legend">{title}</div>
        <ul className="side-bar-list">
          {items.map(item => <FolderListItem item={item} />)}
        </ul>
      </div>
    )
  }
}
