import React from 'react'
import { Email } from '../../../contracts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './EmailListItem.scss';

interface EmailListItemProps {
  email: Email;
}

export class EmailListItem extends React.Component<EmailListItemProps> {
  getTime = (date: Date): string => {
    if (this.isToday(date)) {
      return `${date.getHours()} : ${date.getMinutes()}`;
    }

    if (this.isYesterday(date)) {
      return `Вчера`;
    }

    return `${date.getDay()} ${date.toLocaleString('default', { month: 'short' })}`;
  }

  private isToday = (date: Date): boolean => {
    const today = new Date();
    return today.toDateString() === date.toDateString();
  }

  private isYesterday = (date: Date): boolean => {
    const today = new Date();
    const yesterday = today.setDate(today.getDate() - 1);
    return new Date(yesterday).toDateString() === date.toDateString();
  }

  render() {
    const { email } = this.props;

    return (
      <li className="email-item">
        <div className="email-item-container">
          <div className="email-info">
            <div className="email-icon">
              <FontAwesomeIcon icon={'user'} />
            </div>
            <span className="email-from">{email.from}</span>
            <span className="email-time">{this.getTime(new Date(email.date))}</span>
          </div>
          <div className="email-subject">{email.subject}</div>
          <div className="email-content">{email.content}</div>
        </div>
      </li>
    )
  }
}
