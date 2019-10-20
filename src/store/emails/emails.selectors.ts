import { orderBy } from 'lodash';
import { createSelector } from 'reselect';

import { AppState } from '../app.reducer';
import { Email } from '../../contracts';

export const getEmailsState = (state: AppState) => state.emails;

export const getEmails = (state: AppState) => getEmailsState(state).emails;
export const getActiveEmailId = (state: AppState) => getEmailsState(state).activeEmailId;

export const getEmailsSortedByDate = createSelector(
  getEmails,
  (emails: Email[]) => orderBy(emails, 'date', 'desc')
);

export const getActiveEmail = createSelector(
  getEmails,
  getActiveEmailId,
  (emails: Email[], activeEmailId: string | null) => emails.find((email) => email.id === activeEmailId)
);
