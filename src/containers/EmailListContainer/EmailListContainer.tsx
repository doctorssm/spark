import React from 'react';

import { EmailList, Search } from 'components';
import { Email, NavItem } from 'contracts';

interface EmailListContainerProps {
  emails: Email[];
  activeNavItem: NavItem;
  activeEmailId: string | null;
  setActiveEmail: (emailId: string) => void;
}

const EmailListContainer: React.FC<EmailListContainerProps> = (props) => {
  const { emails, activeNavItem, activeEmailId, setActiveEmail } = props;

  const onEmailClick = (emailId: string): void => {
    setActiveEmail(emailId);
  };

  return (
    <section className="overflow-hidden">
      <Search />
      <div className="bg-white full-height">
        <EmailList
          emails={emails}
          header={activeNavItem.title}
          icon={activeNavItem.icon}
          activeEmailId={activeEmailId}
          onItemClick={onEmailClick}
        />
      </div>
    </section>
  );
};

export default EmailListContainer;
