import {
  ITransaction,
  ExpenseType,
  Month,
  IncomeType,
} from '../interfaces/interfaces';
import {BalanceState} from './calculator/calculator.reducer';

const expenses: Array<ITransaction> = [
  {
    name: 'House Rent',
    amount: 1100,
    type: ExpenseType.HOUSE_RENT,
    selectedMonths: [
      Month.JANUARY,
      Month.FEBRUARY,
      Month.MARCH,
      Month.APRIL,
      Month.MAY,
      Month.JUNE,
      Month.JULY,
      Month.AUGUST,
      Month.SEPTEMBER,
      Month.OCTOBER,
      Month.NOVEMBER,
      Month.DECEMBER,
    ],
  },
];

const income: Array<ITransaction> = [
  {
    name: 'Salary',
    amount: 2000,
    type: IncomeType.SALARY,
    selectedMonths: [
      Month.JANUARY,
      Month.FEBRUARY,
      Month.MARCH,
      Month.APRIL,
      Month.MAY,
      Month.JUNE,
      Month.JULY,
      Month.AUGUST,
      Month.SEPTEMBER,
      Month.OCTOBER,
      Month.NOVEMBER,
      Month.DECEMBER,
    ],
  },
];

export const mockupState: BalanceState = {
  expenses: expenses,
  income: income,
  saving: [],
};
