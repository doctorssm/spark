import React from 'react';

interface EmailListItemTimeProps {
  date: Date;
}

export class EmailListItemTime extends React.Component<EmailListItemTimeProps> {
  getTime = (date: Date): string => {
    if (this.isToday(date)) {
      return `${date.getHours()} : ${date.getMinutes()}`;
    }

    if (this.isYesterday(date)) {
      return `Вчера`;
    }

    return `${date.getDate()} ${date.toLocaleString('default', { month: 'short' })}.`;
  };

  private isToday = (date: Date): boolean => {
    const today = new Date();
    return today.toDateString() === date.toDateString();
  };

  private isYesterday = (date: Date): boolean => {
    const today = new Date();
    const yesterday = today.setDate(today.getDate() - 1);

    return new Date(yesterday).toDateString() === date.toDateString();
  };

  render() {
    return <span className="email-time">{this.getTime(this.props.date)}</span>;
  }
}
