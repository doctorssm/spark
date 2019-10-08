import React from 'react'
import { connect } from 'react-redux';
import { Action } from './Action/Action';
import { ActionType } from '../../enums';
import { Dispatch } from 'redux';
import { setActiveEmail } from '../../store/app.action';

interface ActionBarProps {
  setActiveEmail: (emailId: string | null) => void;
}

const ActionBar: React.FC<ActionBarProps> = (props) => {
  const onActionClick = (type: ActionType): void => {
    const { setActiveEmail } = props;

    switch (type) {
      case ActionType.Close:
        setActiveEmail(null);
        break;
    }
  }

  return (
    <div className="flex" >
      <Action
        icon={'times'}
        type={ActionType.Close}
        title={'Закрыть'}
        onClick={onActionClick}
      />
      <Action
        icon={'circle'}
        type={ActionType.MarkAsRead}
        title={'Отметить как прочитанное'}
        onClick={onActionClick}
      />
      <Action
        icon={'trash-alt'}
        type={ActionType.Delete}
        title={'Удалить'}
        onClick={onActionClick}
      />
    </div>
  )
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setActiveEmail: (emailId: string | null) => dispatch(setActiveEmail(emailId))
});

export default connect(
  null,
  mapDispatchToProps
)(ActionBar);
