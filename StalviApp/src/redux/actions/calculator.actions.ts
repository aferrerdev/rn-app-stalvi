import {ISavings, ITransaction} from '../../interfaces/interfaces';
import {
  ADD_EXPENSE,
  ADD_SAVINGS,
  ADD_INCOME,
} from '../actions/calculator.types';

/**
 * Add Expense
 * @param {ITransaction} expense
 * @returns
 */
export const addExpense = (expense: ITransaction) => {
  return async (dispatch: any, getState: any) => {
    setTimeout(() => {
      console.log(getState);
      console.log('Add Expense');
      dispatch({
        type: ADD_EXPENSE,
        payload: expense,
      });
    }, 2000);
  };
};

/**
 * Add Income
 * @param {ITransaction} expense
 * @returns
 */
export const addIncome = (income: ITransaction) => {
  return async (dispatch: any, getState: any) => {
    setTimeout(() => {
      console.log(getState);
      console.log('Add Income');
      dispatch({
        type: ADD_INCOME,
        payload: income,
      });
    }, 2000);
  };
};

export const addSavings = (saving: ISavings) => {
  return async (dispatch: any, getState: any) => {
    setTimeout(() => {
      console.log(getState);
      console.log('Add Savings');
      dispatch({
        type: ADD_SAVINGS,
        payload: saving,
      });
    }, 2000);
  };
};
