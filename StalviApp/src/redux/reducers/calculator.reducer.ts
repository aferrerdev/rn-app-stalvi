import {CalculatorActionTypes} from '../actions/calculator.actions';
import {BalanceState} from '../state';

const initialBalanceState: BalanceState = {
  expenses: [],
  income: [],
  saving: [],
};

export function calculatorReducer(
  state: BalanceState = initialBalanceState,
  action: CalculatorActionTypes,
): BalanceState {
  switch (action.type) {
    default:
      return state;
  }
}
