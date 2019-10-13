import { EmailContent, EmailContentEmpty } from '../../components'

import { ActionType } from '../../enums'
import { AppState } from '../../store/app.reducer'
import { Dispatch } from 'redux'
import { Email } from '../../contracts'
import React from 'react'
import { connect } from 'react-redux'
import { getActiveEmail } from '../../store/emails/emails.selectors';
import { onActionClick } from '../../store/emails/emails.actions';

interface EmailContentContainerProps {
  email: Email | undefined;
  actionClickHandler: (type: ActionType) => void;
}

const EmailContentContainer: React.FC<EmailContentContainerProps> = (props) => {
  const { email, actionClickHandler } = props;

  return (
    <section className="email-content-container">
      { email ? <EmailContent email={email} onActionClick={actionClickHandler} /> : <EmailContentEmpty /> }
    </section>
  )
}

const mapStateToProps = (state: AppState) => ({
  email: getActiveEmail(state)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  actionClickHandler: (type: ActionType) => dispatch(onActionClick(type))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmailContentContainer);
