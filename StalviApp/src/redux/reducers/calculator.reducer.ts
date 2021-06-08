import {CalculatorActionTypes} from '../actions/calculator.types';
import {BalanceState} from '../state';
import {mockupState} from '../state.mockup';

/*
const initialBalanceState: BalanceState = {
  expenses: [],
  income: [],
  saving: [],
};
*/

export function calculatorReducer(
  state: BalanceState = mockupState,
  action: CalculatorActionTypes,
): BalanceState {
  switch (action.type) {
    default:
      return state;
  }
}
