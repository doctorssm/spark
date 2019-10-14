import { Dispatch } from 'redux';

import NavbarService from '../../services/navbar.service';
import { fetchEmails } from '../emails/emails.actions';
import { NavItem } from '../../contracts';
import { EmailType } from '../../enums';

export enum NavbarActionTypes {
  SET_NAV_ITEMS = '[Navbar] Set Nav Items',
  SELECT_NAV_ITEM = '[Navbar] Select Nav Item'
}

export type NavbarActions =
  | { type: NavbarActionTypes.SET_NAV_ITEMS; items: NavItem[] }
  | { type: NavbarActionTypes.SELECT_NAV_ITEM; emailType: EmailType };

export const initNavbar = (): any => async (dispatch: Dispatch) => {
  dispatch(setNavItems(NavbarService.getNavItems()));
};

export const setNavItems = (items: NavItem[]): NavbarActions => ({
  type: NavbarActionTypes.SET_NAV_ITEMS,
  items
});

export const selectNavItemAction = (emailType: EmailType): any => async (dispatch: Dispatch) => {
  dispatch(selectNavItem(emailType));
  dispatch(fetchEmails());
};

export const selectNavItem = (emailType: EmailType): NavbarActions => ({
  type: NavbarActionTypes.SELECT_NAV_ITEM,
  emailType
});
