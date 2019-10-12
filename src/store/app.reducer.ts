import { AppActionTypes, AppActions } from "./app.action";

import { Email } from "../contracts";
import { EmailType } from "../enums";

export interface AppState {
  emails: Email[];
  activeEmailType: EmailType;
  activeEmailId: string | null;
}

export const initialState: AppState = {
  emails: [],
  activeEmailType: EmailType.Sent,
  activeEmailId: null
};

export const reducer = (state: AppState = initialState, action: AppActions): AppState  => {
  switch (action.type) {
    case AppActionTypes.LOAD_EMAILS_SUCCESS: {
      return { ...state, emails: action.emails };
    }

    case AppActionTypes.UPDATE_EMAIL_SUCCESS: {
      const emails = [...state.emails];
      const index = emails.findIndex(email => email.id === state.activeEmailId);

      if (index === -1) {
        return state;
      }

      emails[index] = action.email;

      return { ...state, emails };
    }

    case AppActionTypes.SET_ACTIVE_EMAIL_TYPE: {
      return { ...state, activeEmailType: action.emailType };
    }

    case AppActionTypes.SET_ACTIVE_EMAIL: {
      return { ...state, activeEmailId: action.emailId };
    }

    default:
      return state;
  }
};
