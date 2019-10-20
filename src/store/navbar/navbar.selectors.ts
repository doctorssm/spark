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

export const getActiveNavItemType = createSelector(
  getNavbarState,
  (state: NavbarState) => state.activeType
);

export const getActiveNavItem = createSelector(
  getNavItems,
  getActiveNavItemType,
  (items: NavItem[], activeType: EmailType) => items.find((item) => item.type === activeType) || ({} as NavItem)
);
