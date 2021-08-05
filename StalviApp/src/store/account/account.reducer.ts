import {AccountActionTypes, LOGIN, LOGOUT} from './account.types';

export interface ProfileState {
  logged: boolean;
  language?: string;
  user?: {
    name: string;
    email: string;
  };
}

const initialProfileState: ProfileState = {
  logged: false,
};

export function accountReducer(
  state: ProfileState = initialProfileState,
  action: AccountActionTypes,
): ProfileState {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        logged: true,
      };
    case LOGOUT:
      return {
        ...state,
      };
    default:
      return state;
  }
}
