import {CalculatorActionTypes} from '../actions/calculator.actions';
import {BalanceState} from '../types/app.state';

const initialBalanceState: BalanceState = {
  expenses: new Array<any>(),
  income: new Array<any>(),
  saving: new Array<any>(),
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
