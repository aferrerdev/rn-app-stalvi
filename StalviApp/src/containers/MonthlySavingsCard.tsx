import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/reducers';
import CardAmount from '../components/CardAmount';
import {BalanceCalculator} from '../services/calculator.service';

const MonthlySavingsCard = () => {
  const balance = useSelector((state: RootState) => state.balance);
  const service = new BalanceCalculator(balance);
  return (
    <CardAmount
      title={'Monthly savings'}
      subtitle="After expenses"
      amount={service.getMonthlySavingsAfterExpenses()}
    />
  );
};

export default MonthlySavingsCard;
