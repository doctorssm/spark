import React from 'react';
import { connect } from 'react-redux';
import { Email, NavItem } from '../../contracts';
import { EmailList, Search } from '../../components';

import { getActiveNavItem } from '../../store/navbar/navbar.selectors';
import { getActiveEmailId, getEmailsSortedByDate } from '../../store/emails/emails.selectors';
import { setActiveEmail } from '../../store/emails/emails.actions';
import { AppState } from '../../store/app.reducer';

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

const mapStateToProps = (state: AppState) => ({
  emails: getEmailsSortedByDate(state),
  activeEmailId: getActiveEmailId(state),
  activeNavItem: getActiveNavItem(state)
});

const mapDispatchToProps = {
  setActiveEmail
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmailListContainer);
