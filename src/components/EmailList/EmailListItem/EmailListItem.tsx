import React from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { EmailListItemTime } from 'components';
import { Email } from 'contracts';

import './EmailListItem.scss';

interface EmailListItemProps {
  email: Email;
  activeEmailId: string | null;
  onClick: (emailId: string) => void;
}

export const EmailListItem: React.FC<EmailListItemProps> = (props) => {
  const { email, activeEmailId, onClick } = props;

  const isActive = (): boolean => {
    return email.id === activeEmailId;
  };

  return (
    <li className={classNames('email-item', { active: isActive() })} onClick={() => onClick(email.id)}>
      <div className="email-item-box">
        <div className={classNames('flex full-width mb-10', { 'email-unread': !email.read })}>
          <div className="email-icon">
            <FontAwesomeIcon icon={'user'} />
          </div>
          <span className="email-from">{email.from}</span>
          <EmailListItemTime date={new Date(email.date)} />
        </div>
        <div className="email-subject">{email.subject}</div>
        <p className="email-content">{email.content}</p>
      </div>
    </li>
  );
};
