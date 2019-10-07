import React from 'react'
import { Search, EmailList } from '../../components';
import EmailService from '../../services/email.service';

export class EmailListContainer extends React.Component {
  state = {
    emails: []
  };

  componentDidMount() {
    EmailService.get().then(emails => this.setState({ emails }))
  }

  render() {
    const { emails } = this.state;

    return (
      <div className="email-list-wrapper">
        <Search />
        <EmailList emails={emails} />
      </div>
    )
  }
}
