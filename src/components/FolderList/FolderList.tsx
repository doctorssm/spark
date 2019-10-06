import './FolderList.scss';

import { FolderItem } from '../../contracts/folder-item.interface';
import React from 'react'

interface FolderListProps {
  items: FolderItem[];
}

export class FolderList extends React.PureComponent<FolderListProps> {
  render() {
    const { items } = this.props;
    return (
      <>
        <div>Папки</div>
        <ul className="folder-list">
          {items.map(item => <li>{item.title}</li>)}
        </ul>
      </>
    )
  }
}
