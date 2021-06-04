import React from 'react';
import {View, StyleSheet} from 'react-native';
import TransactionsList from '../../containers/TransactionsList/TransactionsList';
import {TransactionType} from '../../interfaces/interfaces';

const styles = StyleSheet.create({
  page: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

const IncomePage = () => {
  return (
    <View style={styles.page}>
      <TransactionsList type={TransactionType.INCOME} />
    </View>
  );
};

export default IncomePage;
