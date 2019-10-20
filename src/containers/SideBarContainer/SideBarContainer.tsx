import React from 'react';

import { NavBar } from '../../components';
import { NavItem } from '../../contracts';
import { EmailType } from '../../enums';

interface SideBarContainerProps {
  navItems: NavItem[];
  activeItem: NavItem;
  selectNavItemAction: (type: EmailType) => void;
}

const SideBarContainer: React.FC<SideBarContainerProps> = (props) => {
  const { navItems, activeItem, selectNavItemAction } = props;

  const onActiveEmailTypeChange = (item: NavItem): void => {
    selectNavItemAction(item.type);
  };

  return (
    <section className="side-bar">
      <NavBar items={navItems} activeItem={activeItem} onItemClick={onActiveEmailTypeChange} />
    </section>
  );
};

export default SideBarContainer;
