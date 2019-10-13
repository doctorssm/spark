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
    case NavbarActionTypes.SET_ITEMS: {
      return { ...state, items: action.items };
    }

    case NavbarActionTypes.SELECT_ITEM: {
      const items = state.items.map((item) => {
        const navItem = { ...item };
        navItem.active = navItem.type === action.emailType;
        return navItem;
      });

      return { ...state, items };
    }

    default:
      return state;
  }
};
