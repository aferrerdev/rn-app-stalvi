import React from 'react';
import {
  ExpenseType,
  IncomeType,
  ITransaction,
  TransactionType,
} from '../../interfaces/interfaces';
import {SafeAreaView, FlatList, View, Text} from 'react-native';
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
  const renderItem = (item: ITransaction) => (
    <ListItem bottomDivider>
      <TransactionIcon type={item.type as ExpenseType | IncomeType} />
      <ListItem.Content>
        <ListItem.Title>{item.name}</ListItem.Title>
      </ListItem.Content>
      <ListItem.Content right>
        <View style={styles.content}>
          <Text>{item.amount}</Text>
        </View>
      </ListItem.Content>
    </ListItem>
  );

  return (
    <SafeAreaView style={styles.listView}>
      <FlatList
        data={props.transactions}
        keyExtractor={(item, index) => item.name + index}
        renderItem={({item}) => renderItem(item)}
      />
    </SafeAreaView>
  );
};

export default TransactionsList;
