import { combineReducers } from 'redux';

import { EmailsState, emailsReducer } from './emails/emails.reducer';
import { NavbarState, navbarReducer } from './navbar/navbar.reducer';

export interface AppState {
  emails: EmailsState;
  navbar: NavbarState;
}

export const reducers = combineReducers<AppState>({
  emails: emailsReducer,
  navbar: navbarReducer
});
