import { createSelector } from 'reselect';
import { keyBy } from 'lodash';

import { AppState } from '../app.reducer';
import { NavbarState } from './navbar.reducer';
import { NavItem } from '../../contracts';
import { EmailType } from '../../enums';

export const getNavbarState = (state: AppState) => state.navbar;

export const getNavItems = createSelector(
  getNavbarState,
  (state: NavbarState) => state.items
);

export const getActiveNavItemType = createSelector(
  getNavbarState,
  (state: NavbarState) => state.activeType
);

export const getNavItemsOrder = createSelector(
  getNavbarState,
  (state: NavbarState) => state.order
);

export const getOrderedNavItems = createSelector(
  getNavItems,
  getNavItemsOrder,
  (items: NavItem[], order: EmailType[]) => {
    if (items.length === 0) {
      return [];
    }

    const dictionary = keyBy(items, 'type');
    return order.map((type) => dictionary[type]);
  }
);

export const getActiveNavItem = createSelector(
  getNavItems,
  getActiveNavItemType,
  (items: NavItem[], activeType: EmailType) => items.find((item) => item.type === activeType) || ({} as NavItem)
);
