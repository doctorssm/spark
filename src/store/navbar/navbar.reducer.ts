import { NavbarActionTypes, NavbarActions } from './navbar.actions';
import { NavItem } from '../../contracts';
import { EmailType } from '../../enums';

export interface NavbarState {
  items: NavItem[];
  activeType: EmailType;
  order: EmailType[];
}

export const initialState: NavbarState = {
  items: [],
  activeType: EmailType.Sent,
  order: [
    //
    EmailType.Sent,
    EmailType.Drafts,
    EmailType.Marked,
    EmailType.Archived,
    EmailType.Deleted
  ]
};

export const navbarReducer = (state: NavbarState = initialState, action: NavbarActions): NavbarState => {
  switch (action.type) {
    case NavbarActionTypes.SET_NAV_ITEMS: {
      return { ...state, items: action.items };
    }

    case NavbarActionTypes.SELECT_NAV_ITEM: {
      return { ...state, activeType: action.emailType };
    }

    default:
      return state;
  }
};
