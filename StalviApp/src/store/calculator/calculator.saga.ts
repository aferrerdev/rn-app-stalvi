import {PayloadAction} from '@reduxjs/toolkit';
import {ITransaction} from '../../interfaces/interfaces';
import {all, put, takeEvery} from 'redux-saga/effects';
import {
  addExpenseRequest,
  addExpenseSuccess,
  addIncomeRequest,
  addIncomeSuccess,
  addSavingRequest,
  addSavingSuccess,
} from './calculator.reducer';

function* handleAddIncome(action: PayloadAction<ITransaction>) {
  console.log('handle');
  yield put(addIncomeSuccess(action.payload));
}

function* handleAddExpense(action: PayloadAction<ITransaction>) {
  yield put(addExpenseSuccess(action.payload));
}

function* handleAddSaving(action: PayloadAction<ITransaction>) {
  yield put(addSavingSuccess(action.payload));
}

export function* calculatorSaga() {
  yield all([
    takeEvery(addIncomeRequest.type, handleAddIncome),
    takeEvery(addExpenseRequest.type, handleAddExpense),
    takeEvery(addSavingRequest.type, handleAddSaving),
  ]);
}
