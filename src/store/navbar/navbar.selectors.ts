import { AppState } from '../app.reducer';
import { EmailType } from '../../enums';
import { NavItem } from '../../contracts';
import { NavbarState } from './navbar.reducer';
import { createSelector } from 'reselect'

export const getNavbarState = (state: AppState) => state.navbar;

export const getNavItems = createSelector(
  getNavbarState,
  (state: NavbarState) => state.items
);

export const getActiveNavItem = createSelector(
  getNavItems,
  (items: NavItem[]) => items.find(item => item.active) || {} as NavItem
);

export const getActiveNavItemType = createSelector(
  getActiveNavItem,
  (item: NavItem) => item.type || EmailType.Sent
);
