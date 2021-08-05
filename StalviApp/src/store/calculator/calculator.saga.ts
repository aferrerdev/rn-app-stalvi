import {PayloadAction} from '@reduxjs/toolkit';
import {ITransaction} from '../../interfaces/interfaces';
import {all, put, takeLatest} from 'redux-saga/effects';
import {addExpense, addIncome, addSaving} from './calculator.reducer';

function* handleAddIncome(action: PayloadAction<ITransaction>) {
  console.log('handle');
  yield put(addIncome(action.payload));
}

function* handleAddExpense(action: PayloadAction<ITransaction>) {
  console.log(action);
}

function* handleAddSaving(action: PayloadAction<ITransaction>) {
  console.log(action);
}

export function* calculatorSaga() {
  yield all([
    takeLatest(addIncome.type, handleAddIncome),
    takeLatest(addExpense.type, handleAddExpense),
    takeLatest(addSaving.type, handleAddSaving),
  ]);
}
