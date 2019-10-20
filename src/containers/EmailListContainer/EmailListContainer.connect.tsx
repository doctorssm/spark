import { connect } from 'react-redux';

import EmailListContainer from './EmailListContainer';
import { AppState } from 'store/app.reducer';
import { getEmailsSortedByDate, getActiveEmailId } from 'store/emails/emails.selectors';
import { getActiveNavItem } from 'store/navbar/navbar.selectors';
import { setActiveEmail } from 'store/emails/emails.actions';

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
