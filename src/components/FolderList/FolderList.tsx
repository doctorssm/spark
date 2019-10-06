import './FolderList.scss';

import { FolderItem } from '../../contracts/folder-item.interface';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
          {items.map(item => {
            return (
              <li><FontAwesomeIcon icon={'coffee'} />{item.title}</li>
            )
          })}
        </ul>
      </>
    )
  }
}
