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
      <>
        <div>{title}</div>
        <ul className="folder-list">
          {items.map(item => <FolderListItem item={item} />)}
        </ul>
      </>
    )
  }
}
