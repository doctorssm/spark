import { createSelector } from 'reselect';
import { keyBy } from 'lodash';

import { AppState } from 'store/app.reducer';
import { NavItem } from 'contracts';
import { EmailType } from 'enums';

export const getNavbarState = (state: AppState) => state.navbar;

export const getNavItems = (state: AppState) => getNavbarState(state).items;
export const getActiveNavItemType = (state: AppState) => getNavbarState(state).activeType;
export const getNavItemsOrder = (state: AppState) => getNavbarState(state).order;

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
