import {createAction, createReducer, PayloadAction} from '@reduxjs/toolkit';
import {ISavings, ITransaction} from '../../interfaces/interfaces';
import {mockupState} from '../mockup/state.mockup';

export const addExpenseRequest = createAction<ITransaction>(
  '@BALANCE/ADD_EXPENSE_REQUEST',
);
export const addExpenseSuccess = createAction<ITransaction>(
  '@BALANCE/ADD_EXPENSE_SUCCESS',
);
export const addExpenseError = createAction<ITransaction>(
  '@BALANCE/ADD_EXPENSE_ERROR',
);
export const addIncomeRequest = createAction<ITransaction>(
  '@BALANCE/ADD_INCOME_REQUEST',
);
export const addIncomeSuccess = createAction<ITransaction>(
  '@BALANCE/ADD_INCOME_SUCCESS',
);
export const addIncomeError = createAction<ITransaction>(
  '@BALANCE/ADD_INCOME_ERROR',
);
export const addSavingRequest = createAction<ITransaction>(
  '@BALANCE/ADD_SAVING_REQUEST',
);
export const addSavingSuccess = createAction<ITransaction>(
  '@BALANCE/ADD_SAVING_SUCCESS',
);
export const addSavingError = createAction<ITransaction>(
  '@BALANCE/ADD_SAVING_ERROR',
);

export interface BalanceState {
  expenses: Array<ITransaction>;
  income: Array<ITransaction>;
  saving: Array<ISavings>;
}

/*
const initialBalanceState: BalanceState = {
  expenses: [],
  income: [],
  saving: [],
};*/

export const calculatorReducer = createReducer(mockupState, {
  [addExpenseSuccess.type]: (
    state: BalanceState,
    action: PayloadAction<ITransaction>,
  ) => ({...state, expenses: [...state.expenses, action.payload]}),
  [addIncomeSuccess.type]: (
    state: BalanceState,
    action: PayloadAction<ITransaction>,
  ) => {
    console.log('reducer');
    return {...state, income: [...state.income, action.payload]};
  },
  [addSavingSuccess.type]: (
    state: BalanceState,
    action: PayloadAction<ISavings>,
  ) => ({
    ...state,
    saving: [...state.saving, action.payload],
  }),
});
