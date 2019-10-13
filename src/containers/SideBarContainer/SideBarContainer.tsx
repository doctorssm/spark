import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { getNavItems } from '../../store/navbar/navbar.selectors';
import { selectNavItemAction } from '../../store/navbar/navbar.actions';
import { AppState } from '../../store/app.reducer';
import { NavBar } from '../../components';
import { NavItem } from '../../contracts';
import { EmailType } from '../../enums';

interface SideBarContainerProps {
  navItems: NavItem[];
  selectNavItem: (type: EmailType) => void;
}

const SideBarContainer: React.FC<SideBarContainerProps> = (props) => {
  const { navItems, selectNavItem } = props;

  const onActiveEmailTypeChange = (item: NavItem): void => {
    selectNavItem(item.type);
  };

  return (
    <section className="side-bar">
      <NavBar items={navItems} onItemClick={onActiveEmailTypeChange} />
    </section>
  );
};

const mapStateToProps = (state: AppState) => ({
  navItems: getNavItems(state)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  selectNavItem: (type: EmailType) => dispatch(selectNavItemAction(type))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBarContainer);
