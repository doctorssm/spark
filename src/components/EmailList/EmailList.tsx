import React from 'react';

import { EmailListHeader, EmailListItem, EmailListEmpty } from 'components';
import { Email } from 'contracts';

interface EmailListProps {
  header: string;
  icon?: string;
  emails: Email[];
  activeEmailId: string | null;
  onItemClick: (emailId: string) => void;
}

export const EmailList: React.FC<EmailListProps> = (props) => {
  const { header, icon, emails, activeEmailId, onItemClick } = props;

  return (
    <div className="bg-white full-height">
      <EmailListHeader header={header} icon={icon} />
      {emails.length > 0 ? (
        <ul className="overflow-auto full-height">
          {emails.map((email) => (
            <EmailListItem key={email.id} email={email} activeEmailId={activeEmailId} onClick={onItemClick} />
          ))}
        </ul>
      ) : (
        <EmailListEmpty />
      )}
    </div>
  );
};
