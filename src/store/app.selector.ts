import { AppState } from './app.reducer';
import { orderBy } from 'lodash';

export const getEmails = (state: AppState) => state.emails;

export const getEmailsSortedByDate = (state: AppState) => orderBy(state.emails, 'date', 'desc');

export const getActiveEmail = (state: AppState) => {
  return state.emails.find(email => email.id === state.activeEmailId);
};

// TODO: update to reselect lib
export const getEmailById = (state: AppState, emailId: string) => {
  return state.emails.find(email => email.subject === emailId);
}

export const getActiveFolderType = (state: AppState) => state.activeFolder;

export const isActiveEmailExist = (state: AppState) => !!state.activeEmailId;
