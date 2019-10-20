import { connect } from 'react-redux';

import EmailContentContainer from './EmailContentContainer';
import { AppState } from '../../store/app.reducer';
import { getActiveEmail } from '../../store/emails/emails.selectors';
import { onActionClick } from '../../store/emails/emails.actions';

const mapStateToProps = (state: AppState) => ({
  email: getActiveEmail(state)
});

const mapDispatchToProps = {
  onActionClick
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmailContentContainer);
