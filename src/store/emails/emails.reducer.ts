import { EmailsActionTypes, EmailsActions } from './emails.actions';
import { Email } from '../../contracts';

export interface EmailsState {
  emails: Email[];
  activeEmailId: string | null;
}

export const initialState: EmailsState = {
  emails: [],
  activeEmailId: null
};

export const emailsReducer = (state: EmailsState = initialState, action: EmailsActions): EmailsState => {
  switch (action.type) {
    case EmailsActionTypes.LOAD_EMAILS_SUCCESS: {
      return { ...state, emails: action.emails, activeEmailId: null };
    }

    case EmailsActionTypes.UPDATE_EMAIL_SUCCESS: {
      const emails = [...state.emails];
      const index = emails.findIndex((email) => email.id === state.activeEmailId);

      if (index === -1) {
        return state;
      }

      emails[index] = action.email;

      return { ...state, emails };
    }

    case EmailsActionTypes.SET_ACTIVE_EMAIL: {
      return { ...state, activeEmailId: action.emailId };
    }

    default:
      return state;
  }
};
