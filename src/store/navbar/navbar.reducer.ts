import { NavbarActionTypes, NavbarActions } from './navbar.actions';
import { NavItem } from '../../contracts';
import { EmailType } from '../../enums';

export interface NavbarState {
  items: NavItem[];
  activeType: EmailType;
}

export const initialState: NavbarState = {
  items: [],
  activeType: EmailType.Sent
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
