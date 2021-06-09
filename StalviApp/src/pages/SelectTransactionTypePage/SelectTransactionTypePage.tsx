import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {ListItem} from 'react-native-elements';
import TransactionIcon from '../../components/TransactionIcon';
import {
  getIncomeTypes,
  IncomeType,
  ExpenseType,
} from '../../interfaces/interfaces';

const styles = StyleSheet.create({
  page: {flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start'},
  listView: {
    flex: 1,
    alignSelf: 'stretch',
  },
});

const SelectTransactionTypePage = () => {
  const navigator = useNavigation();
  const types: Array<string> = getIncomeTypes();

  const onTypePressed = (type: string) => {
    navigator.navigate('AddTransaction', {
      type,
    });
  };

  return (
    <View style={styles.page}>
      <FlatList
        style={styles.listView}
        data={types}
        renderItem={({item}) => (
          <ListItem onPress={() => onTypePressed(item)}>
            <TransactionIcon type={item as ExpenseType | IncomeType} />
            <ListItem.Content>
              <ListItem.Title>{item}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        )}
      />
    </View>
  );
};

export default SelectTransactionTypePage;
