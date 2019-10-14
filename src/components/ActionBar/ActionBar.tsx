import React from 'react';

import { Action } from './Action/Action';
import { ActionType } from '../../enums';

export interface ActionBarProps {
  isEmailRead?: boolean;
  onActionClick: (action: ActionType) => void;
}

export const ActionBar: React.FC<ActionBarProps> = (props) => {
  const { onActionClick, isEmailRead } = props;

  const getToggleReadActionTitle = (): string => {
    return `Отметить как ${isEmailRead ? 'непрочитанное' : 'прочитанное'}`;
  };

  return (
    <div className="flex">
      <Action icon={'times'} type={ActionType.Close} title={'Закрыть'} onClick={onActionClick} />
      <Action icon={'circle'} type={ActionType.ToggleRead} title={getToggleReadActionTitle()} onClick={onActionClick} />
      <Action icon={'trash-alt'} type={ActionType.Delete} title={'Удалить'} onClick={onActionClick} />
      <Action icon={'file-download'} type={ActionType.Download} title={'Сохранить'} onClick={onActionClick} />
    </div>
  );
};
