import { Dispatch } from 'redux';

import NavbarService from '../../services/navbar.service';
import { fetchEmails } from '../emails/emails.actions';
import { NavItem } from '../../contracts';
import { EmailType } from '../../enums';

export enum NavbarActionTypes {
  SET_ITEMS = '[Navbar] Set Items',
  SELECT_ITEM = '[Navbar] Select Item'
}

export type NavbarActions =
  | { type: NavbarActionTypes.SET_ITEMS; items: NavItem[] }
  | { type: NavbarActionTypes.SELECT_ITEM; emailType: EmailType };

export const initNavbar = (): any => async (dispatch: Dispatch) => {
  dispatch(setItems(NavbarService.getNavItems()));
};

export const setItems = (items: NavItem[]): NavbarActions => ({
  type: NavbarActionTypes.SET_ITEMS,
  items
});

export const selectNavItemAction = (emailType: EmailType): any => async (dispatch: Dispatch) => {
  dispatch(selectNavItem(emailType));
  dispatch(fetchEmails());
};

export const selectNavItem = (emailType: EmailType): NavbarActions => ({
  type: NavbarActionTypes.SELECT_ITEM,
  emailType
});
