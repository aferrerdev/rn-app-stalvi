export const ADD_EXPENSE = 'ADD_EXPENSE';
export const ADD_INCOME = 'ADD_INCOME';
export const ADD_SAVINGS = 'ADD_SAVINGS';
export const FETCH_USER_BALANCE = 'ADD_SAVINGS';

interface AddExpenseAction {
  type: typeof ADD_EXPENSE;
  payload: any;
}

interface AddIncomeAction {
  type: typeof ADD_INCOME;
  payload: any;
}

interface AddSavingsAction {
  type: typeof ADD_SAVINGS;
  payload: any;
}

interface FetchUserBalanceAction {
  type: typeof ADD_SAVINGS;
  payload: any;
}

export type CalculatorActionTypes =
  | AddExpenseAction
  | AddIncomeAction
  | AddSavingsAction;
