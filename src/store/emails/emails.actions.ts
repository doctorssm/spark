import { AppState } from "../app.reducer";
import { Dispatch } from "redux";
import { Email } from "../../contracts";
import EmailService from '../../services/email.service';
import { EmailsState } from "./emails.reducer";
import { getActiveEmailType } from "../navbar/navbar.selectors";

export enum EmailsActionTypes {
  LOAD_EMAILS = '[Emails] Load Emails',
  LOAD_EMAILS_SUCCESS = '[Emails] Load Emails Success',
  LOAD_EMAILS_FAIL = '[Emails] Load Emails Fail',
  UPDATE_EMAIL = '[Emails] Update Email',
  UPDATE_EMAIL_SUCCESS = '[Emails] Update Email Success',
  UPDATE_EMAIL_FAIL = '[Emails] Update Email Fail',
  SET_ACTIVE_EMAIL = '[Emails] Set Active Email'
}

export type EmailsActions =
  | { type: EmailsActionTypes.LOAD_EMAILS }
  | { type: EmailsActionTypes.LOAD_EMAILS_SUCCESS; emails: Email[] }
  | { type: EmailsActionTypes.LOAD_EMAILS_FAIL; }
  | { type: EmailsActionTypes.UPDATE_EMAIL; emailId: string, email: Email }
  | { type: EmailsActionTypes.UPDATE_EMAIL_SUCCESS; email: Email }
  | { type: EmailsActionTypes.UPDATE_EMAIL_FAIL; }
  | { type: EmailsActionTypes.SET_ACTIVE_EMAIL; emailId: string | null };

export const initEmails = (): any => async(dispatch: Dispatch) => {
  dispatch(fetchEmails());
};

export const fetchEmails = (): any => async(dispatch: Dispatch, getState: () => AppState) => {
  dispatch(loadEmails());

  try {
    const emails = await EmailService.get(getActiveEmailType(getState()));
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

export const updateEmailAction = (updates: Partial<Email>): any => async(dispatch: Dispatch, getState: () => EmailsState) => {
  const { emails, activeEmailId } = getState();
  const email = emails.find(email => email.id === activeEmailId);

  if (!email) {
    return;
  }

  const emailToUpdate = {...email, ...updates};
  dispatch(updateEmail(email.id, emailToUpdate));

  try {
    const updatedEmail = await EmailService.update(email.id, emailToUpdate);
    dispatch(updateEmailSuccess(updatedEmail));
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

export const setActiveEmail = (emailId: string | null): EmailsActions => ({
  type: EmailsActionTypes.SET_ACTIVE_EMAIL,
  emailId
});
