import { AppState } from '../../store/app.reducer';
import { Dispatch } from 'redux';
import { EmailType } from '../../enums';
import { NavBar } from '../../components';
import { NavItem } from '../../contracts';
import React from 'react'
import { connect } from 'react-redux';
import { getNavItems } from '../../store/navbar/navbar.selectors';
import { selectNavItemAction } from '../../store/navbar/navbar.actions';

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
  )
}

const mapStateToProps = (state: AppState) => ({
  navItems: getNavItems(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  selectNavItem: (type: EmailType) => dispatch(selectNavItemAction(type))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBarContainer);
