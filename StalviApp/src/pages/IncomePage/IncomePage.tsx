import React from 'react';
import {View, StyleSheet} from 'react-native';
import {FAB} from 'react-native-elements';
import TransactionsList from '../../containers/TransactionsList/TransactionsList';
import {TransactionType} from '../../interfaces/interfaces';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/reducers';

const styles = StyleSheet.create({
  page: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

const IncomePage = () => {
  const income = useSelector((state: RootState) => state.balance.income);
  return (
    <View style={styles.page}>
      <TransactionsList transactions={income} type={TransactionType.INCOME} />
      <FAB
        icon={<Ionicon name="add" color="white" size={22} />}
        iconPosition="top"
        placement="right"
        visible
      />
    </View>
  );
};

export default IncomePage;
