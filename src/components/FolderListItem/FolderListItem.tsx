import './FolderListItem.scss';

import { FolderItem } from '../../contracts/folder-item.interface';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import React from 'react'

interface FolderListItemProps {
  item: FolderItem;
}

export class FolderListItem extends React.Component<FolderListItemProps> {
  render() {
    const { item } = this.props;

    return (
      <li className="item">
        <span className="item-icon">
          <FontAwesomeIcon icon={item.icon as IconProp} />
        </span>
        <span className="item-title">{item.title}</span>
      </li>
    )
  }
}
