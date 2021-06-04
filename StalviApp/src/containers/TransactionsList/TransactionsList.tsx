import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/reducers';
import {
  ExpenseType,
  IncomeType,
  ITransaction,
  TransactionType,
} from '../../interfaces/interfaces';
import {SectionList, SafeAreaView} from 'react-native';
import {styles} from './TransactionsList.theme';
import {ListItem} from 'react-native-elements';
import TransactionIcon from '../../components/TransactionIcon';

interface TransactionsListProps {
  type: TransactionType;
}

interface TransactionSection {
  transactionType: string;
  data: Array<ITransaction>;
}

const TransactionsList = (props: TransactionsListProps) => {
  const transactions = useSelector((state: RootState) => {
    switch (props.type) {
      case TransactionType.EXPENSES:
        return state.balance.expenses;
      case TransactionType.INCOME:
        return state.balance.income;
    }
  });

  const sections: Array<TransactionSection> = [];
  const transactionSubTypes = Object.keys(
    props.type === TransactionType.EXPENSES ? ExpenseType : IncomeType,
  );
  transactionSubTypes.forEach(transactionType => {
    const data = transactions.filter(
      (transaction: ITransaction) => transaction.type === transactionType,
    );
    if (data.length > 0) {
      sections.push({transactionType, data});
    }
  });

  const renderItem = (item: ITransaction) => (
    <ListItem bottomDivider>
      <ListItem.Content>
        <ListItem.Title>{item.name}</ListItem.Title>
        <ListItem.Subtitle>{item.amount}</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );

  const renderSectionHeader = (transactionType: string) => (
    <ListItem style={styles.header} bottomDivider>
      <TransactionIcon type={transactionType as ExpenseType | IncomeType} />
      <ListItem.Content>
        <ListItem.Title>{transactionType}</ListItem.Title>
      </ListItem.Content>
    </ListItem>
  );

  return (
    <SafeAreaView style={styles.listView}>
      <SectionList
        sections={sections}
        keyExtractor={(item, index) => item.name + index}
        renderItem={({item}) => renderItem(item)}
        renderSectionHeader={({section: {transactionType}}) =>
          renderSectionHeader(transactionType)
        }
      />
    </SafeAreaView>
  );
};

export default TransactionsList;
