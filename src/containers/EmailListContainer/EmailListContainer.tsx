import React from 'react'
import { Search, EmailList } from '../../components';
import { Email } from '../../contracts';
import { connect } from 'react-redux';
import { AppState } from '../../store/app.reducer';
import { getEmails } from '../../store/app.selector';

interface EmailListContainerProps {
  emails: Email[];
}

const EmailListContainer: React.FC<EmailListContainerProps> = (props) => {
  return (
    <section className="email-list-wrapper">
      <Search />
      <div className="bg-white full-height">
        <EmailList emails={props.emails} header={'Отправленные'} icon={'paper-plane'}/>
      </div>
    </section>
  )
}

const mapStateToProps = (state: AppState) => ({
  emails: getEmails(state)
});

export default connect(
  mapStateToProps
)(EmailListContainer);
