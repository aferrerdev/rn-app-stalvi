export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

interface LoginAction {
  type: typeof LOGIN;
  payload: any;
}

interface LogoutAction {
  type: typeof LOGOUT;
  payload: any;
}

export type AccountActionTypes = LoginAction | LogoutAction;
