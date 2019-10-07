import React from 'react'
import { Email } from '../../contracts'
import { EmailListItem } from './EmailListItem/EmailListItem'

import './EmailList.scss';

interface EmailListProps {
  emails: Email[];
}

export class EmailList extends React.Component<EmailListProps> {
  render() {
    return (
      <ul className="list-email">
        { this.props.emails.map(email => <EmailListItem key={email.subject} email={email} /> ) }
      </ul>
    )
  }
}
