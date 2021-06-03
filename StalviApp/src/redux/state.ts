import {ITransaction} from '../interfaces/interfaces';

export interface UserProfile {
  name: string;
  email: string;
}

export interface ProfileState {
  logged: boolean;
  language?: string;
  user?: UserProfile;
}

export interface BalanceState {
  expenses: Array<ITransaction>;
  income: Array<ITransaction>;
  saving: Array<ITransaction>;
}
