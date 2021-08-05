import {combineReducers} from 'redux';
import {accountReducer} from './account/account.reducer';
import {calculatorReducer} from './calculator/calculator.reducer';

export const rootReducer = combineReducers({
  account: accountReducer,
  balance: calculatorReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
