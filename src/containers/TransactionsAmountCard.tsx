import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/reducers';
import {Periodicity, TransactionType} from '../interfaces/interfaces';
import CardAmount from '../components/CardAmount';
import {BalanceState} from '../redux/state';
import {BalanceCalculator} from '../services/calculator.service';

interface TransactionsAmountCardProps {
  type: TransactionType;
  periodicity: Periodicity;
}

const getTitle = (type: TransactionType) => {
  switch (type) {
    case TransactionType.EXPENSES:
      return 'Expenses';
    case TransactionType.INCOME:
      return 'Income';
  }
};

const getAmount = (
  type: TransactionType,
  periodicity: Periodicity,
  balance: BalanceState,
): number => {
  const service = new BalanceCalculator(balance);
  switch (type) {
    case TransactionType.EXPENSES:
      return service.getExpensesAmount(periodicity);
    case TransactionType.INCOME:
      return service.getIncomesAmount(periodicity);
  }
};

const TransactionsAmountCard = (props: TransactionsAmountCardProps) => {
  const balance = useSelector((state: RootState) => state.balance);
  return (
    <CardAmount
      title={getTitle(props.type)}
      subtitle="Total balance"
      amount={getAmount(props.type, props.periodicity, balance)}
    />
  );
};

export default TransactionsAmountCard;
