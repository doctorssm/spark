import React from 'react'
import { Email } from '../../contracts'
import { EmailListItem } from './EmailListItem/EmailListItem'

import './EmailList.scss';
import { EmailListHeader } from './EmailListHeader/EmailListHeader';

interface EmailListProps {
  header: string;
  icon?: string;
  emails: Email[];
  onItemClick: (emailId: string) => void;
}

export const EmailList: React.FC<EmailListProps> = (props) => {
  const { header, icon, emails, onItemClick } = props;

  return (
    <div className="list-email-wrapper">
      <EmailListHeader header={header} icon={icon} />
      <ul className="list-email">
        { emails
            .filter(email => !email.deleted)
            .map(email => <EmailListItem key={email.subject} email={email} onClick={onItemClick} />)
        }
      </ul>
    </div>
  )
}
