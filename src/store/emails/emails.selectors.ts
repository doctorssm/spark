import { AppState } from '../app.reducer';
import { EmailsState } from './emails.reducer';
import { orderBy } from 'lodash';

export const getEmails = (state: AppState) => state.emails.emails;

export const getEmailsSortedByDate = (state: AppState) => orderBy(state.emails.emails, 'date', 'desc');

// TODO: update to reselect lib
export const getActiveEmail = (state: AppState) => {
  return state.emails.emails.find(email => email.id === state.emails.activeEmailId);
};

export const getActiveEmailId = (state: AppState) => {
  return state.emails.activeEmailId;
};

