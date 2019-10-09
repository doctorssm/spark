import React from 'react';
import './EmailContent.scss';
import { Email } from '../../contracts';
import { ActionBar, ActionBarProps } from '../ActionBar/ActionBar';
import classNames from 'classnames';

interface EmailContentProps extends ActionBarProps {
  email: Email;
}

export class EmailContent extends React.Component<EmailContentProps> {
  render() {
    const { email, onActionClick } = this.props;

    return (
      <>
        <div className="mb-25">
          <ActionBar onActionClick={onActionClick} />
        </div>
        <div className="email-subject">{email.subject}</div>
        <div className={classNames('email-content', { read: email.read})}>
          <div className="email-info">
            <div className="email-from-info">{email.from}</div>
            {/* <EmailListItemTime date={new Date(email.date)} /> */}
          </div>
          <div className="link mb-30 pointer">Кому: Sergii Bogush</div>
          <div className="email-text">{email.content}</div>
        </div>
      </>
    )
  }
}

