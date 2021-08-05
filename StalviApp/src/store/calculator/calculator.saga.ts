import {PayloadAction} from '@reduxjs/toolkit';
import {ITransaction} from '../../interfaces/interfaces';
import {all, put, takeEvery} from 'redux-saga/effects';
import {addExpense, addIncome, addSaving} from './calculator.reducer';

function* handleAddIncome(action: PayloadAction<ITransaction>) {
  console.log(action);
  yield put(action);
}

function* handleAddExpense(action: PayloadAction<ITransaction>) {
  console.log(action);
}

function* handleAddSaving(action: PayloadAction<ITransaction>) {
  console.log(action);
}

export function* calculatorSaga() {
  yield all([
    takeEvery(addIncome.type, handleAddIncome),
    takeEvery(addExpense.type, handleAddExpense),
    takeEvery(addSaving.type, handleAddSaving),
  ]);
}
