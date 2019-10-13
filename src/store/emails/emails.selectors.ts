import { AppState } from '../app.reducer';
import { Email } from '../../contracts';
import { EmailsState } from './emails.reducer';
import { createSelector } from 'reselect'
import { orderBy } from 'lodash';

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
  (emails: Email[], activeEmailId: string | null) => emails.find(email => email.id === activeEmailId)
);
