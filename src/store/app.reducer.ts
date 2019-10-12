import { EmailsState, emailsReducer } from './emails/emails.reducer';
import { NavbarState, navbarReducer } from './navbar/navbar.reducer';

import { combineReducers } from 'redux';

export interface AppState {
  emails: EmailsState;
  navbar: NavbarState;
}

export const reducers = combineReducers<AppState>({
  emails: emailsReducer,
  navbar: navbarReducer
});
