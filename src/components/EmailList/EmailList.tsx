import { Email } from '../../contracts'
import { EmailListHeader } from './EmailListHeader/EmailListHeader';
import { EmailListItem } from './EmailListItem/EmailListItem'
import React from 'react'

interface EmailListProps {
  header: string;
  icon?: string;
  emails: Email[];
  onItemClick: (emailId: string) => void;
}

export const EmailList: React.FC<EmailListProps> = (props) => {
  const { header, icon, emails, onItemClick } = props;

  return (
    <div className="bg-white full-height">
      <EmailListHeader header={header} icon={icon} />
      <ul className="overflow-auto full-height">
        { emails
            .filter(email => !email.deleted)
            .map(email => <EmailListItem key={email.subject} email={email} onClick={onItemClick} />)
        }
      </ul>
    </div>
  )
}
