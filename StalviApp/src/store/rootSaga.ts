import {all} from 'redux-saga/effects';
import {calculatorSaga} from './calculator/calculator.saga';

export function* rootSaga() {
  yield all([calculatorSaga()]);
}
