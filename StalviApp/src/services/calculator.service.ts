import {ITransaction, Periodicity} from '../interfaces/interfaces';
import {BalanceState} from '../redux/state';

export class BalanceCalculator {
  private balance: BalanceState;

  constructor(balance: BalanceState) {
    this.balance = balance;
  }

  public getBalance() {
    return this.balance;
  }

  public getMonthlySavingsAfterExpenses() {
    const currentMonth = new Date().getMonth() + 1;
    const incomeAmount = this.balance.income
      .filter((transaction: ITransaction) =>
        transaction.selectedMonths.includes(currentMonth),
      )
      .reduce(
        (acumulator, currentValue) => acumulator + currentValue.amount,
        0,
      );
    const expensesAmount = this.balance.expenses
      .filter((transaction: ITransaction) =>
        transaction.selectedMonths.includes(currentMonth),
      )
      .reduce(
        (acumulator, currentValue) => acumulator + currentValue.amount,
        0,
      );
    return incomeAmount - expensesAmount;
  }

  public getIncomesAmount(periodicity: Periodicity): number {
    return this.getTransactionsAmount(this.balance.income, periodicity);
  }

  public getExpensesAmount(periodicity: Periodicity): number {
    return this.getTransactionsAmount(this.balance.expenses, periodicity);
  }

  public getSavingsAmount(): number {
    return this.balance.saving.reduce(
      (acumulator, currentValue) => acumulator + currentValue.amount,
      0,
    );
  }

  private getTransactionsAmount(
    elements: Array<ITransaction>,
    periodicity: Periodicity,
  ): number {
    return elements
      .filter((transaction: ITransaction) => {
        switch (periodicity) {
          case Periodicity.ALL_THE_TIME:
            return transaction.selectedMonths.length === 12;
        }
      })
      .reduce(
        (acumulator, currentValue) => acumulator + currentValue.amount,
        0,
      );
  }
}
