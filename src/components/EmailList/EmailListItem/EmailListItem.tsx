import React from 'react'
import { Email } from '../../../contracts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './EmailListItem.scss';
import { EmailListItemTime } from '../EmailListItemTime/EmailListItemTime';

interface EmailListItemProps {
  email: Email;
  onClick: (emailId: string) => void;
}

export const EmailListItem: React.FC<EmailListItemProps> = (props) => {
  const { email, onClick } = props;

  return (
    // TODO: replace subject to emailId
    <li className="email-item" onClick={() => onClick(email.subject)}>
      <div className="email-item-container">
        <div className="email-info">
          <div className="email-icon">
            <FontAwesomeIcon icon={'user'} />
          </div>
          <span className="email-from">{email.from}</span>
          <EmailListItemTime date={new Date(email.date)} />
        </div>
        <div className="email-subject">{email.subject}</div>
        <div className="email-text">{email.content}</div>
      </div>
    </li>
  )
}
