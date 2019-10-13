import { AppState } from '../app.reducer';
import { EmailType } from '../../enums';

export const getNavItems = (state: AppState) => state.navbar.items;

export const getActiveEmail = (state: AppState) => {
  return state.navbar.items.find(item => item.active);
}

// TODO: rename
export const getActiveEmailType = (state: AppState) => {
  // TODO: move to separate selector getActiveEmail
  const activeEmail = getActiveEmail(state);
  return activeEmail ? activeEmail.type : EmailType.Sent;
};

export const getFolderName = (state: AppState) => {
  const activeEmail = getActiveEmail(state);
  return activeEmail ? activeEmail.title : '';
}

export const getFolderIcon = (state: AppState) => {
  const activeEmail = getActiveEmail(state);
  return activeEmail ? activeEmail.icon : '';
}
