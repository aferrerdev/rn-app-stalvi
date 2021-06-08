import React from 'react';
import {View, StyleSheet} from 'react-native';
import {FAB} from 'react-native-elements';
import TransactionsList from '../../components/TransactionsList/TransactionsList';
import {TransactionType} from '../../interfaces/interfaces';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/reducers';

const styles = StyleSheet.create({
  page: {flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start'},
});

const ExpensesPage = () => {
  const expenses = useSelector((state: RootState) => state.balance.expenses);
  return (
    <View style={styles.page}>
      <TransactionsList
        transactions={expenses}
        type={TransactionType.EXPENSES}
      />
      <FAB
        icon={<Ionicon name="add" color="white" size={22} />}
        iconPosition="top"
        placement="right"
        visible
      />
    </View>
  );
};

export default ExpensesPage;
