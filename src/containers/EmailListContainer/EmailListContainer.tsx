import React from 'react'
import { Search, EmailList } from '../../components';
import EmailService from '../../services/email.service';

export class EmailListContainer extends React.Component {
  state = {
    emails: []
  };

  componentDidMount() {
    this.setState({emails: EmailService.get()})
  }

  render() {
    return (
      <div>
        <Search />
        <EmailList emails={[]} />
      </div>
    )
  }
}
