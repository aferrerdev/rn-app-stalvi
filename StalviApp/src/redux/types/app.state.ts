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
  expenses: Array<any>;
  income: Array<any>;
  saving: Array<any>;
}
