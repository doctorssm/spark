import React from 'react';
import './EmailContent.scss';
import { Email } from '../../contracts';
import { ActionBar } from '../ActionBar';

interface EmailContentProps {
  email: Email;
}

export class EmailContent extends React.Component<EmailContentProps> {
  render() {
    const { email } = this.props;

    return (
      <>
        <div className="mb-25">
          <ActionBar />
        </div>
        <div className="email-subject">{email.subject}</div>
        <div className="email-content">
          <div className="email-info">
            <div className="email-from">{email.from}</div>
            {/* <EmailListItemTime date={new Date(email.date)} /> */}
          </div>
          <div className="email-to link">Кому: Sergii Bogush</div>
          <div className="email-text">{email.content}</div>
        </div>
      </>
    )
  }
}

