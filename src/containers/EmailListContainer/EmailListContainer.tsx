import { EmailList, Search } from '../../components';
import { getActiveEmail, getActiveEmailId, getEmailsSortedByDate } from '../../store/emails/emails.selectors';
import { getFolderIcon, getFolderName } from '../../store/navbar/navbar.selectors';

import { AppState } from '../../store/app.reducer';
import { Dispatch } from 'redux';
import { Email } from '../../contracts';
import React from 'react'
import { connect } from 'react-redux';
import { setActiveEmail } from '../../store/emails/emails.actions';

interface EmailListContainerProps {
  emails: Email[];
  listIcon: string;
  listHeader: string;
  activeEmailId: string | null;
  setActiveEmail: (emailId: string) => void;
}

const EmailListContainer: React.FC<EmailListContainerProps> = (props) => {
  const { emails, listIcon, listHeader, activeEmailId, setActiveEmail } = props;

  const onEmailClick = (emailId: string): void => {
    setActiveEmail(emailId);
  };

  return (
    <section className="overflow-hidden">
      <Search />
      <div className="bg-white full-height">
        <EmailList emails={emails} header={listHeader} icon={listIcon} activeEmailId={activeEmailId} onItemClick={onEmailClick} />
      </div>
    </section>
  )
}

const mapStateToProps = (state: AppState) => ({
  emails: getEmailsSortedByDate(state),
  activeEmailId: getActiveEmailId(state),
  listIcon: getFolderIcon(state),
  listHeader: getFolderName(state)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setActiveEmail: (emailId: string) => dispatch(setActiveEmail(emailId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmailListContainer);
