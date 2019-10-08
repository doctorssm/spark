import { Email } from "../contracts";
import { AppActions, AppActionTypes } from "./app.action";

export interface AppState {
  emails: Email[];
}

export const initialState: AppState = {
  emails: []
};

export const reducer = (state: AppState = initialState, action: AppActions): AppState  => {
  switch (action.type) {
    case AppActionTypes.LOAD_EMAILS_SUCCESS: {
      return { ...state, emails: action.emails };
    }

    default:
      return state;
  }
};
