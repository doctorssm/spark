import React from 'react'
import { Action } from './Action/Action';
import { ActionType } from '../../enums';

export class ActionBar extends React.Component {
  onActionClick = (type: ActionType): void => {
    console.log('onActionClick', type);
  }

  render() {
    return (
      <div className="flex" >
        <Action
          icon={'circle'}
          type={ActionType.MarkAsRead}
          title={'Отметить как прочитанное'}
          onClick={this.onActionClick}
        />
        <Action
          icon={'trash-alt'}
          type={ActionType.Delete}
          title={'Удалить'}
          onClick={this.onActionClick}
        />
      </div>
    )
  }
}
