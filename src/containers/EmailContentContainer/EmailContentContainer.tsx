import React, { useEffect } from 'react';

import { EmailContent, EmailContentEmpty } from 'components';
import { Email } from 'contracts';
import { ActionType } from 'enums';

const { ipcRenderer } = window.require('electron');

interface EmailContentContainerProps {
  email?: Email;
  onActionClick: (type: ActionType) => void;
}

const EmailContentContainer: React.FC<EmailContentContainerProps> = (props) => {
  const { email, onActionClick } = props;

  useEffect(() => {
    ipcRenderer.on('action', (e: Event, props: ActionType) => {
      onActionClick(props);
    });
  }, [onActionClick]);

  return (
    <section className="email-content-container">
      {email ? <EmailContent email={email} onActionClick={onActionClick} /> : <EmailContentEmpty />}
    </section>
  );
};

export default EmailContentContainer;
