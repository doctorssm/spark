import { Email } from "../contracts";
import { Dispatch } from "redux";

import EmailService from '../services/email.service';
import { FolderType } from "../enums";

export enum AppActionTypes {
  LOAD_EMAILS = '[App] Load Emails',
  LOAD_EMAILS_SUCCESS = '[App] Load Emails Success',
  LOAD_EMAILS_FAIL = '[App] Load Emails Fail',
  SET_ACTIVE_FOLDER = '[App] Set Active Folder',
  SET_ACTIVE_EMAIL = '[App] Set Active Email'
}

export type AppActions =
  | { type: AppActionTypes.LOAD_EMAILS }
  | { type: AppActionTypes.LOAD_EMAILS_SUCCESS; emails: Email[] }
  | { type: AppActionTypes.LOAD_EMAILS_FAIL; }
  | { type: AppActionTypes.SET_ACTIVE_FOLDER; folderType: FolderType | undefined }
  | { type: AppActionTypes.SET_ACTIVE_EMAIL; emailId: string | null };

export const initApp = (): any => async(dispatch: Dispatch) => {
  dispatch(loadEmails());

  try {
    const emails = await EmailService.get();
    dispatch(loadEmailsSuccess(emails));
  } catch (error) {
    dispatch(loadEmailsFail());
  }
};

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

export const setActiveFolder = (folderType: FolderType| undefined): AppActions => ({
  type: AppActionTypes.SET_ACTIVE_FOLDER,
  folderType
});

export const setActiveEmail = (emailId: string | null): AppActions => ({
  type: AppActionTypes.SET_ACTIVE_EMAIL,
  emailId
});
