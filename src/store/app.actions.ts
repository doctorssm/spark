import { Dispatch } from 'redux';
import { initEmails } from './emails/emails.actions';
import { initNavbar } from './navbar/navbar.actions';

export enum AppActionTypes {
  INIT = '[App] Init'
}

export type AppActions = { type: AppActionTypes.INIT };

export const initApp = (): any => (dispatch: Dispatch) => {
  dispatch(initEmails());
  dispatch(initNavbar());
};
