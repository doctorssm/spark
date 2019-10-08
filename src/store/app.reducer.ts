import { Email } from "../contracts";
import { AppActions, AppActionTypes } from "./app.action";

export interface AppState {
  emails: Email[];
  activeEmailId: string | null;
}

export const initialState: AppState = {
  emails: [],
  activeEmailId: null
};

export const reducer = (state: AppState = initialState, action: AppActions): AppState  => {
  switch (action.type) {
    case AppActionTypes.LOAD_EMAILS_SUCCESS: {
      return { ...state, emails: action.emails };
    }

    case AppActionTypes.SET_ACTIVE_EMAIL: {
      return { ...state, activeEmailId: action.emailId };
    }

    default:
      return state;
  }
};
