import React from 'react'
import { Dispatch } from 'redux';
import { Search, EmailList } from '../../components';
import { Email } from '../../contracts';
import { connect } from 'react-redux';
import { AppState } from '../../store/app.reducer';
import { getEmails } from '../../store/app.selector';
import { setActiveEmail } from '../../store/app.action';

interface EmailListContainerProps {
  emails: Email[];
  setActiveEmail: (emailId: string) => void;
}

const EmailListContainer: React.FC<EmailListContainerProps> = (props) => {
  const { emails, setActiveEmail } = props;

  const onEmailClick = (emailId: string): void => {
    setActiveEmail(emailId);
  };

  return (
    <section className="email-list-wrapper">
      <Search />
      <div className="bg-white full-height">
        <EmailList emails={emails} header={'Отправленные'} icon={'paper-plane'} onItemClick={onEmailClick} />
      </div>
    </section>
  )
}

const mapStateToProps = (state: AppState) => ({
  emails: getEmails(state)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setActiveEmail: (emailId: string) => dispatch(setActiveEmail(emailId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmailListContainer);
