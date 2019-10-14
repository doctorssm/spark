import React, { useEffect } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { getActiveEmail } from '../../store/emails/emails.selectors';
import { onActionClick } from '../../store/emails/emails.actions';
import { AppState } from '../../store/app.reducer';
import { EmailContent, EmailContentEmpty } from '../../components';
import { Email } from '../../contracts';
import { ActionType } from '../../enums';

// const { ipcRenderer } = window.require('electron');

interface EmailContentContainerProps {
  email: Email | undefined;
  actionClickHandler: (type: ActionType) => void;
}

const EmailContentContainer: React.FC<EmailContentContainerProps> = (props) => {
  const { email, actionClickHandler } = props;

  // useEffect(() => {
  //   ipcRenderer.on('action', (e: Event, props: ActionType) => {
  //     actionClickHandler(props);
  //   });
  // }, [actionClickHandler]);

  return (
    <section className="email-content-container">
      {email ? <EmailContent email={email} onActionClick={actionClickHandler} /> : <EmailContentEmpty />}
    </section>
  );
};

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
