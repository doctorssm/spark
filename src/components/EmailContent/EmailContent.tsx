import React from 'react';
import classNames from 'classnames';

import { ActionBar, ActionBarProps } from '../ActionBar/ActionBar';
import { Email } from '../../contracts';

import './EmailContent.scss';

interface EmailContentProps extends ActionBarProps {
  email: Email;
}

export const EmailContent: React.FC<EmailContentProps> = (props) => {
  const { email, onActionClick } = props;

  return (
    <>
      <div className="mb-25">
        <ActionBar isEmailRead={email.read} onActionClick={onActionClick} />
      </div>
      <div className="email-subject">{email.subject}</div>
      <div className={classNames('email-content', { unread: !email.read })}>
        <div className="email-info">
          <div className="email-from-info">{email.from}</div>
        </div>
        <div className="link mb-30 pointer">Кому: Sergii Bogush</div>
        <div className="email-text">{email.content}</div>
      </div>
    </>
  );
};
