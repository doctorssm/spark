import { AppState } from '../app.reducer';
import { EmailType } from '../../enums';

export const getNavItems = (state: AppState) => state.navbar.items;

// TODO: rename
export const getActiveEmailType = (state: AppState) => {
  const activeItem = state.navbar.items.find(item => item.active);
  return activeItem ? activeItem.type : EmailType.Sent;
};

export const getFolderName = (state: AppState) => {
  switch (getActiveEmailType(state)) {
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
