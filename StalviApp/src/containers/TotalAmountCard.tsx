import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/reducers';
import {Periodicity, TransactionType} from '../interfaces/interfaces';
import CardAmount from '../components/CardAmount';

interface SavingsCardProps {
  type: TransactionType;
  periodicity: Periodicity;
}

const TotalAmountCard = (props: SavingsCardProps) => {
  console.log(props);
  const data = useSelector((state: RootState) => state.balance);
  console.log(data);
  return <CardAmount title="Savings" subtitle="Total balance" amount={40000} />;
};

export default TotalAmountCard;
