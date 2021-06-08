import React from 'react';
import {
  ExpenseType,
  IncomeType,
  ITransaction,
  TransactionType,
} from '../../interfaces/interfaces';
import {SectionList, SafeAreaView} from 'react-native';
import {styles} from './TransactionsList.theme';
import {ListItem} from 'react-native-elements';
import TransactionIcon from '../TransactionIcon';

interface TransactionsListProps {
  type: TransactionType;
  transactions: Array<ITransaction>;
}

interface TransactionSection {
  transactionType: string;
  data: Array<ITransaction>;
}

const TransactionsList = (props: TransactionsListProps) => {
  const sections: Array<TransactionSection> = [];
  const transactionSubTypes = Object.keys(
    props.type === TransactionType.EXPENSES ? ExpenseType : IncomeType,
  );
  transactionSubTypes.forEach(transactionType => {
    const data = props.transactions.filter(
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
