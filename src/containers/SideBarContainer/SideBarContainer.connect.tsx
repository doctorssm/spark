import { connect } from 'react-redux';

import SideBarContainer from './SideBarContainer';
import { AppState } from '../../store/app.reducer';
import { getOrderedNavItems, getActiveNavItem } from '../../store/navbar/navbar.selectors';
import { selectNavItemAction } from '../../store/navbar/navbar.actions';

const mapStateToProps = (state: AppState) => ({
  navItems: getOrderedNavItems(state),
  activeItem: getActiveNavItem(state)
});

const mapDispatchToProps = {
  selectNavItemAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBarContainer);
