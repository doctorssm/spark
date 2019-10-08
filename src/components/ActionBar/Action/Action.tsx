import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import './Action.scss';

interface ActionProps {
  icon: string;
  title?: string;
}

export class Action extends React.Component<ActionProps> {
  render() {
    const { title, icon } = this.props;

    return (
      <div className="action" title={title}>
        <FontAwesomeIcon icon={icon as IconProp} />
      </div>
    )
  }
}
