import { Email } from "../contracts";

export enum AppActionTypes {
  INIT = '[App] Init',
  LOAD_EMAILS = '[App] Load Emails',
  LOAD_EMAILS_SUCCESS = '[App] Load Emails Success',
  LOAD_EMAILS_FAIL = '[App] Load Emails Fail',
}

export type AppActions =
  | { type: AppActionTypes.INIT }
  | { type: AppActionTypes.LOAD_EMAILS }
  | { type: AppActionTypes.LOAD_EMAILS_SUCCESS; emails: Email[] }
  | { type: AppActionTypes.LOAD_EMAILS_FAIL; };

export const initApp = (): AppActions  => ({
  type: AppActionTypes.INIT
});

export const loadEmails = (): AppActions => ({
  type: AppActionTypes.LOAD_EMAILS
});

export const loadEmailsSuccess = (emails: Email[]): AppActions => ({
  type: AppActionTypes.LOAD_EMAILS_SUCCESS,
  emails
});

export const loadEmailsFail = (): AppActions => ({
  type: AppActionTypes.LOAD_EMAILS_FAIL
});
