import {AccountActionTypes, LOGIN, LOGOUT} from '../actions/account.types';
import {ProfileState} from '../state';

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
