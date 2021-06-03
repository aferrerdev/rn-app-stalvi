import {BalanceState} from '../redux/state';

export class BalanceCalculator {
  private balance: BalanceState;

  constructor(balance: BalanceState) {
    this.balance = balance;
  }
}
