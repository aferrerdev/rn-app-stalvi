import React from 'react';
import {useSelector} from 'react-redux';
import CardAmount from '../components/CardAmount';
import {RootState} from '../redux/reducers';
import {Periodicity} from '../redux/types/app.types';

interface SavingsCardProps {
  periodicity: Periodicity;
}

const SavingsCard = (props: SavingsCardProps) => {
  console.log(props);
  const data = useSelector((state: RootState) => state.balance);
  console.log('Data:' + data);
  return <CardAmount title="Savings" subtitle="Total balance" amount={40000} />;
};

export default SavingsCard;
