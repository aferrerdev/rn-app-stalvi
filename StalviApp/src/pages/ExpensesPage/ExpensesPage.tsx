import React from 'react';
import {View, StyleSheet} from 'react-native';
import TransactionsList from '../../containers/TransactionsList/TransactionsList';
import {TransactionType} from '../../interfaces/interfaces';

const styles = StyleSheet.create({
  page: {flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start'},
});

const ExpensesPage = () => {
  return (
    <View style={styles.page}>
      <TransactionsList type={TransactionType.EXPENSES} />
    </View>
  );
};

export default ExpensesPage;
