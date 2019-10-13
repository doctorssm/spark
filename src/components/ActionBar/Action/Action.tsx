import React from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import { ActionType } from '../../../enums';

import './Action.scss';

interface ActionProps {
  icon: string;
  type: ActionType;
  title?: string;
  onClick: (type: ActionType) => void;
}

export const Action: React.FC<ActionProps> = (props) => {
  const { title, icon, type, onClick } = props;

  return (
    <div
      className={classNames('action', { close: type === ActionType.Close })}
      title={title}
      onClick={() => onClick(type)}
    >
      <FontAwesomeIcon icon={icon as IconProp} />
    </div>
  );
};
