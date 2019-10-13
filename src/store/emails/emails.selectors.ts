import { orderBy } from 'lodash';
import { createSelector } from 'reselect';

import { AppState } from '../app.reducer';
import { EmailsState } from './emails.reducer';
import { Email } from '../../contracts';

export const getEmailsState = (state: AppState) => state.emails;

export const getEmails = createSelector(
  getEmailsState,
  (state: EmailsState) => state.emails
);

export const getActiveEmailId = createSelector(
  getEmailsState,
  (state: EmailsState) => state.activeEmailId
);

export const getEmailsSortedByDate = createSelector(
  getEmails,
  (emails: Email[]) => orderBy(emails, 'date', 'desc')
);

export const getActiveEmail = createSelector(
  getEmails,
  getActiveEmailId,
  (emails: Email[], activeEmailId: string | null) => emails.find((email) => email.id === activeEmailId)
);
