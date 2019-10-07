import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

import './EmailListHeader.scss';

interface EmailListHeaderProps {
  header: string;
  icon?: string;
}

export class EmailListHeader extends React.Component<EmailListHeaderProps> {
  render() {
    const { header, icon} = this.props;

    return (
      <header className="list-header">
        <FontAwesomeIcon icon={icon as IconProp} />
        <span>{header}</span>
      </header>
    )
  }
}
