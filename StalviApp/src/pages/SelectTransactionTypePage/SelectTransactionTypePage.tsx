import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {ListItem} from 'react-native-elements';
import TransactionIcon from '../../components/TransactionIcon';
import {
  getIncomeTypes,
  IncomeType,
  ExpenseType,
  TransactionType,
  getExpenseTypes,
} from '../../interfaces/interfaces';

const styles = StyleSheet.create({
  page: {flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start'},
  listView: {
    flex: 1,
    alignSelf: 'stretch',
  },
  card: {
    flex: 1,
    alignContent: 'stretch',
  },
});

interface SelectTransactionTypePageProps {
  route: any;
}

const SelectTransactionTypePage = (props: SelectTransactionTypePageProps) => {
  const transactionType = props.route.params.type;
  const navigator = useNavigation();
  const types: Array<string> =
    transactionType === TransactionType.INCOME
      ? getIncomeTypes()
      : getExpenseTypes();

  const onTypePressed = (subType: string) => {
    navigator.navigate('SelectMonths', {
      type: transactionType,
      subType,
    });
  };

  return (
    <View style={styles.page}>
      <FlatList
        style={styles.listView}
        data={types}
        keyExtractor={(item, index) => item + index}
        renderItem={({item, index}) => (
          <ListItem
            topDivider
            key={item + index}
            onPress={() => onTypePressed(item)}>
            <TransactionIcon type={item as ExpenseType | IncomeType} />
            <ListItem.Content>
              <ListItem.Title>{item}</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        )}
      />
    </View>
  );
};

export default SelectTransactionTypePage;
