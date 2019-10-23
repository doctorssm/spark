import React from 'react';
import classNames from 'classnames';

import { ActionBar, ActionBarProps } from 'components';
import { Email } from 'contracts';

import './EmailContent.scss';

interface EmailContentProps extends ActionBarProps {
  email: Email;
}

export const EmailContent: React.FC<EmailContentProps> = (props) => {
  const { email, onActionClick } = props;

  return (
    <div className="container-email-content">
      <div className="mb-25">
        <ActionBar isEmailRead={email.read} onActionClick={onActionClick} />
      </div>
      <div className="email-subject">{email.subject}</div>
      <div className="email-box">
        <div className={classNames('relative bold mb-10', { unread: !email.read })}>{email.from}</div>
        <div className="link mb-30 pointer inline-block">Кому: Sergii Bogush</div>
        <p>{email.content}</p>
      </div>
    </div>
  );
};
