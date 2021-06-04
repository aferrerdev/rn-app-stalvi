import React from 'react';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {ExpenseType, IncomeType} from '../interfaces/interfaces';

interface TransactionIconProps {
  type: ExpenseType | IncomeType;
}

const iconConfig = {
  size: 20,
  color: 'black',
};

const renderIcon = (name: string) => (
  <FontAwesome5Icon name={name} color={'black'} size={iconConfig.size} />
);

const getIcon = (type: ExpenseType | IncomeType) => {
  switch (type) {
    case ExpenseType.HOUSE_RENT:
      return renderIcon('home');
    case ExpenseType.BILLS:
      return renderIcon('money-check-alt');
    case ExpenseType.BILLS:
      return renderIcon('money-check-alt');
    default:
      return null;
  }
};

const TransactionIcon = (props: TransactionIconProps) => {
  return getIcon(props.type);
};

export default TransactionIcon;
