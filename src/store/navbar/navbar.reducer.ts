import { NavbarActionTypes, NavbarActions } from './navbar.actions';
import { NavItem } from '../../contracts';

export interface NavbarState {
  items: NavItem[];
}

export const initialState: NavbarState = {
  items: []
};

export const navbarReducer = (state: NavbarState = initialState, action: NavbarActions): NavbarState => {
  switch (action.type) {
    case NavbarActionTypes.SET_NAV_ITEMS: {
      return { ...state, items: action.items };
    }

    case NavbarActionTypes.SELECT_NAV_ITEM: {
      const items = state.items.map((item) => ({ ...item, active: item.type === action.emailType }));

      return { ...state, items };
    }

    default:
      return state;
  }
};
