import React from 'react';

interface EmailListItemTimeProps {
  date: Date;
}

export const EmailListItemTime: React.FC<EmailListItemTimeProps> = (props) => {
  const getTime = (date: Date): string => {
    if (isToday(date)) {
      return `${date.getHours()} : ${date.getMinutes()}`;
    }

    if (isYesterday(date)) {
      return `Вчера`;
    }

    return `${date.getDate()} ${date.toLocaleString('default', { month: 'short' })}.`;
  };

  const isToday = (date: Date): boolean => {
    const today = new Date();
    return today.toDateString() === date.toDateString();
  };

  const isYesterday = (date: Date): boolean => {
    const today = new Date();
    const yesterday = today.setDate(today.getDate() - 1);

    return new Date(yesterday).toDateString() === date.toDateString();
  };

  return <span className="email-time">{getTime(props.date)}</span>;
};
