import React from 'react'
import { EmailContent } from '../../components'
import { Email } from '../../contracts'
import { connect } from 'react-redux'
import { AppState } from '../../store/app.reducer'
import { getActiveEmail } from '../../store/app.selector'

interface EmailContentContainerProps {
  email: Email | undefined;
}

const EmailContentContainer: React.FC<EmailContentContainerProps> = (props) => {
  return (
    <section className="email-content-container">
      { props.email ? <EmailContent email={props.email} /> : 'EMAIL ICON' }
    </section>
  )
}

const mapStateToProps = (state: AppState) => ({
  email: getActiveEmail(state)
});

export default connect(
  mapStateToProps
)(EmailContentContainer);
