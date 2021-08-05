import {createAction, createReducer, PayloadAction} from '@reduxjs/toolkit';
import {ISavings, ITransaction} from '../../interfaces/interfaces';
import {mockupState} from '../state.mockup';

export const addExpense = createAction<ITransaction>('@BALANCE/ADD_EXPENSE');
export const addIncome = createAction<ITransaction>('@BALANCE/ADD_INCOME');
export const addSaving = createAction<ITransaction>('@BALANCE/ADD_SAVING');

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
  [addExpense.type]: (
    state: BalanceState,
    action: PayloadAction<ITransaction>,
  ) => ({...state, expenses: [...state.expenses, action.payload]}),
  [addIncome.type]: (
    state: BalanceState,
    action: PayloadAction<ITransaction>,
  ) => ({...state, income: [...state.income, action.payload]}),
  [addSaving.type]: (state: BalanceState, action: PayloadAction<ISavings>) => ({
    ...state,
    saving: [...state.saving, action.payload],
  }),
});
