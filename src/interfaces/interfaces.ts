export enum Periodicity {
  ALL_THE_TIME = 'ALL_THE_TIME',
  YEARLY = 'YEARLY',
  MONTHLY = 'MONTHLY',
  DAILY = 'DAILY',
}

export enum TransactionType {
  EXPENSES = 'EXPENSES',
  INCOME = 'INCOME',
}

export enum ExpenseType {
  HOUSE_RENT = 'HOUSE_RENT',
  BILLS = 'BILLS',
  OTHERS = 'OTHERS',
}
export enum IncomeType {
  SALARY = 'SALARY',
  PENSION = 'PENSION',
  LOTTERY = 'LOTTERY',
  OTHERS = 'OTHERS',
}
export enum SavingType {
  BANK = 'BANK',
  CASH = 'CASH',
  OTHERS = 'OTHERS',
}

export enum Month {
  JANUARY = '1',
  FEBRUARY = '2',
  MARCH = '3',
  APRIL = '4',
  MAY = '5',
  JUNE = '6',
  JULY = '7',
  AUGUST = '8',
  SEPTEMBER = '9',
  OCTOBER = '10',
  NOVEMBER = '11',
  DECEMBER = '12',
}

export interface ITransaction {
  name: string;
  amount: number;
  selectedMonths: Array<Month>;
  type: ExpenseType | IncomeType;
}

export interface ISavings {
  name: string;
  amount: number;
  type: SavingType;
}

export const getIncomeTypes = () => {
  return Object.keys(IncomeType);
};

export const getExpenseTypes = () => {
  return Object.keys(ExpenseType);
};
