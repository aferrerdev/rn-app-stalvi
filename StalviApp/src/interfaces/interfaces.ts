export enum Periodicity {
  ALL_THE_TIME = 'ALL_THE_TIME',
  YEARLY = 'YEARLY',
  MONTHLY = 'MONTHLY',
  DAILY = 'DAILY',
}

export enum TransactionType {
  EXPENSES = 'EXPENSES',
  INCOME = 'INCOME',
  SAVINGS = 'SAVINGS',
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
  JANUARY = 'JANUARY',
  FEBRUARY = 'FEBRUARY',
  MARCH = 'MARCH',
  APRIL = 'APRIL',
  MAY = 'MAY',
  JUNE = 'JUNE',
  JULY = 'JULY',
  AUGUST = 'AUGUST',
  SEPTEMBER = 'SEPTEMBER',
  OCTOBER = 'OCTOBER',
  NOVEMBER = 'NOVEMBER',
  DECEMBER = 'DECEMBER',
}

export interface ITransaction {
  id: string;
  name: string;
  amount: number;
  selectedMonths: Array<Month>;
  type: ExpenseType | IncomeType;
}

export interface IExpense {}
