import { AppState } from './app.reducer';
import { EmailType } from '../enums';
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

export const getActiveEmailType = (state: AppState) => state.activeEmailType;

export const isActiveEmailExist = (state: AppState) => !!state.activeEmailId;

export const getFolderName = (state: AppState) => {
  switch (state.activeEmailType) {
    case EmailType.Sent:
      return 'Отправленные';
    case EmailType.Drafts:
      return 'Черновики';
    case EmailType.Marked:
      return 'Отмеченные';
    case EmailType.Archived:
      return 'Архив';
    case EmailType.Deleted:
      return 'Корзина';
    default:
      return '';
  }
}
