import { createSelector } from 'reselect';

import { AppState } from '../app.reducer';
import { NavbarState } from './navbar.reducer';
import { NavItem } from '../../contracts';
import { EmailType } from '../../enums';

export const getNavbarState = (state: AppState) => state.navbar;

export const getNavItems = createSelector(
  getNavbarState,
  (state: NavbarState) => state.items
);

export const getActiveNavItem = createSelector(
  getNavItems,
  (items: NavItem[]) => items.find((item) => item.active) || ({} as NavItem)
);

export const getActiveNavItemType = createSelector(
  getActiveNavItem,
  (item: NavItem) => item.type || EmailType.Sent
);
