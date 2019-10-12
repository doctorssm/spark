import React, { useEffect, useState } from 'react'

import { Dispatch } from 'redux';
import { EmailType } from '../../enums';
import { NavBar } from '../../components';
import NavBarService from '../../services/navbar.service';
import { NavItem } from '../../contracts';
import { connect } from 'react-redux';
import { setActiveEmailTypeAction } from '../../store/app.action';

interface SideBarContainerProps {
  setActiveEmailType: (type: EmailType) => void;
}

const SideBarContainer: React.FC<SideBarContainerProps> = (props) => {
  const [navBarItems, setNavBarItems] = useState<NavItem[]>([]);
  useEffect(() => setNavBarItems(NavBarService.getNavItems()), [])

  const onActiveEmailTypeChange = (item: NavItem): void => {
    props.setActiveEmailType(item.type);

  };

  return (
    <section className="side-bar">
      <NavBar items={navBarItems} onItemClick={onActiveEmailTypeChange} />
    </section>
  )
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setActiveEmailType: (type: EmailType) => dispatch(setActiveEmailTypeAction(type))
});

export default connect(
  null,
  mapDispatchToProps
)(SideBarContainer);
