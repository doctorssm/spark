import { Dispatch } from 'redux';

import EmailService from '../../services/email.service';
import { AppState } from '../app.reducer';
import { getActiveEmail } from './emails.selectors';
import { getActiveNavItemType } from '../navbar/navbar.selectors';
import { Email } from '../../contracts';
import { ActionType, EmailType } from '../../enums';

const { ipcRenderer } = window.require('electron');

export enum EmailsActionTypes {
  LOAD_EMAILS = '[Emails] Load Emails',
  LOAD_EMAILS_SUCCESS = '[Emails] Load Emails Success',
  LOAD_EMAILS_FAIL = '[Emails] Load Emails Fail',
  UPDATE_EMAIL = '[Emails] Update Email',
  UPDATE_EMAIL_SUCCESS = '[Emails] Update Email Success',
  UPDATE_EMAIL_FAIL = '[Emails] Update Email Fail',
  DELETE_EMAIL = '[Emails] Delete Email',
  DELETE_EMAIL_SUCCESS = '[Emails] Delete Email Success',
  DELETE_EMAIL_FAIL = '[Emails] Delete Email Fail',
  SET_ACTIVE_EMAIL = '[Emails] Set Active Email'
}

export type EmailsActions =
  | { type: EmailsActionTypes.LOAD_EMAILS }
  | { type: EmailsActionTypes.LOAD_EMAILS_SUCCESS; emails: Email[] }
  | { type: EmailsActionTypes.LOAD_EMAILS_FAIL }
  | { type: EmailsActionTypes.UPDATE_EMAIL; emailId: string; email: Email }
  | { type: EmailsActionTypes.UPDATE_EMAIL_SUCCESS; email: Email }
  | { type: EmailsActionTypes.UPDATE_EMAIL_FAIL }
  | { type: EmailsActionTypes.DELETE_EMAIL; emailId: string }
  | { type: EmailsActionTypes.DELETE_EMAIL_SUCCESS; emailId: string }
  | { type: EmailsActionTypes.DELETE_EMAIL_FAIL }
  | { type: EmailsActionTypes.SET_ACTIVE_EMAIL; emailId: string | null };

export const initEmails = (): any => (dispatch: Dispatch) => {
  dispatch(fetchEmails());
};

export const fetchEmails = (): any => async (dispatch: Dispatch, getState: () => AppState) => {
  dispatch(loadEmails());

  try {
    const emails = await EmailService.get(getActiveNavItemType(getState()));
    dispatch(loadEmailsSuccess(emails));
  } catch (error) {
    dispatch(loadEmailsFail());
  }
};

export const loadEmails = (): EmailsActions => ({
  type: EmailsActionTypes.LOAD_EMAILS
});

export const loadEmailsSuccess = (emails: Email[]): EmailsActions => ({
  type: EmailsActionTypes.LOAD_EMAILS_SUCCESS,
  emails
});

export const loadEmailsFail = (): EmailsActions => ({
  type: EmailsActionTypes.LOAD_EMAILS_FAIL
});

export const updateEmailAction = (updates: Partial<Email>, action?: ActionType): any => async (
  dispatch: Dispatch,
  getState: () => AppState
) => {
  const { emails } = getState();
  const email = emails.emails.find((email) => email.id === emails.activeEmailId);

  if (!email) {
    return;
  }

  const emailToUpdate = { ...email, ...updates };
  dispatch(updateEmail(email.id, emailToUpdate));

  try {
    const updatedEmail = await EmailService.update(email.id, emailToUpdate);
    dispatch(updateEmailSuccess(updatedEmail));

    if (action && action === ActionType.Delete) {
      dispatch(deleteEmailSuccess(email.id));
      dispatch(setActiveEmail(null));
    }
  } catch (error) {
    dispatch(updateEmailFail());
  }
};

export const updateEmail = (emailId: string, email: Email): EmailsActions => ({
  type: EmailsActionTypes.UPDATE_EMAIL,
  emailId,
  email
});

export const updateEmailSuccess = (email: Email): EmailsActions => ({
  type: EmailsActionTypes.UPDATE_EMAIL_SUCCESS,
  email
});

export const updateEmailFail = (): EmailsActions => ({
  type: EmailsActionTypes.UPDATE_EMAIL_FAIL
});

export const deleteEmailAction = (emailId: string): any => async (dispatch: Dispatch) => {
  dispatch(deleteEmail(emailId));

  try {
    await EmailService.delete(emailId);
    dispatch(deleteEmailSuccess(emailId));
  } catch (error) {
    dispatch(deleteEmailFail());
  }
};

export const deleteEmail = (emailId: string): EmailsActions => ({
  type: EmailsActionTypes.DELETE_EMAIL,
  emailId
});

export const deleteEmailSuccess = (emailId: string): EmailsActions => ({
  type: EmailsActionTypes.DELETE_EMAIL_SUCCESS,
  emailId
});

export const deleteEmailFail = (): EmailsActions => ({
  type: EmailsActionTypes.DELETE_EMAIL_FAIL
});

export const setActiveEmail = (emailId: string | null): EmailsActions => ({
  type: EmailsActionTypes.SET_ACTIVE_EMAIL,
  emailId
});

export const onActionClick = (action: ActionType): any => (dispatch: Dispatch, getState: () => AppState) => {
  const email = getActiveEmail(getState());
  const activeNavItemType = getActiveNavItemType(getState());

  switch (action) {
    case ActionType.Close: {
      dispatch(setActiveEmail(null));
      break;
    }

    case ActionType.ToggleRead: {
      if (!email) {
        break;
      }

      dispatch(updateEmailAction({ read: !email.read }));
      break;
    }

    case ActionType.Delete: {
      activeNavItemType === EmailType.Deleted
        ? dispatch(deleteEmailAction(email!.id))
        : dispatch(updateEmailAction({ type: EmailType.Deleted }, action));
      break;
    }

    case ActionType.Download: {
      ipcRenderer.send('download', email);
      break;
    }
  }
};
