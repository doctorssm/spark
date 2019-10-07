import React from 'react'
import { Email } from '../../contracts'
import { EmailListItem } from './EmailListItem/EmailListItem'

import './EmailList.scss';
import { EmailListHeader } from './EmailListHeader/EmailListHeader';

interface EmailListProps {
  header: string;
  icon?: string;
  emails: Email[];
}

export class EmailList extends React.Component<EmailListProps> {
  render() {
    const { header, icon, emails } = this.props;

    return (
      <div className="list-email-wrapper">
        <EmailListHeader header={header} icon={icon} />
        <ul className="list-email">
          { emails.map(email => <EmailListItem key={email.subject} email={email} /> ) }
        </ul>
      </div>
    )
  }
}
