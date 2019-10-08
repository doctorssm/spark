import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import './Action.scss';
import { ActionType } from '../../../enums';

interface ActionProps {
  icon: string;
  type: ActionType;
  title?: string;
  onClick: (type: ActionType) => void;
}

export class Action extends React.Component<ActionProps> {
  render() {
    const { title, icon, type, onClick } = this.props;

    return (
      <div className="action" title={title} onClick={() => onClick(type)}>
        <FontAwesomeIcon icon={icon as IconProp} />
      </div>
    )
  }
}
