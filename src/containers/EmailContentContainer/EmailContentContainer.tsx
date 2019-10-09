import React from 'react'
import { EmailContent, EmailContentEmpty } from '../../components'
import { Email } from '../../contracts'
import { connect } from 'react-redux'
import { AppState } from '../../store/app.reducer'
import { getActiveEmail } from '../../store/app.selector'
import { ActionType } from '../../enums'
import { Dispatch } from 'redux'
import { setActiveEmail, update } from '../../store/app.action'

interface EmailContentContainerProps {
  email: Email | undefined;
  setActiveEmail: (emailId: string | null) => void;
  updateEmail: (updates: Partial<Email>) => void;
}

const EmailContentContainer: React.FC<EmailContentContainerProps> = (props) => {
  const { email, setActiveEmail, updateEmail } = props;

  // TODO: is this correct place for this logic?
  const onActionClick = (type: ActionType): void => {
    switch (type) {
      case ActionType.Close:
        return setActiveEmail(null);
      case ActionType.MarkAsRead:
        return updateEmail({ read: !email!.read }); // TODO: !
      case ActionType.Delete:
        return updateEmail({ deleted: true });
    }
  }

  return (
    <section className="email-content-container">
      { email ? <EmailContent email={email} onActionClick={onActionClick} /> : <EmailContentEmpty /> }
    </section>
  )
}

const mapStateToProps = (state: AppState) => ({
  email: getActiveEmail(state)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setActiveEmail: (emailId: string | null) => dispatch(setActiveEmail(emailId)),
  updateEmail: (updates: Partial<Email>) => dispatch(update(updates))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmailContentContainer);
