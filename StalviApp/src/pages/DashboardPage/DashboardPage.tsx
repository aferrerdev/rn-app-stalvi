import React, {useEffect} from 'react';
import {View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Periodicity, TransactionType} from '../../interfaces/interfaces';
import TransactionsAmountCard from '../../containers/TransactionsAmountCard';
import SavingsAmountCard from '../../containers/SavingsAmountCard';
import MonthlySavingsCard from '../../containers/MonthlySavingsCard';
import {styles} from './DashboardPage.theme';
import {useDispatch} from 'react-redux';
import SavingsForecast from '../../containers/SavingsForecast';

const DashboardPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    //dispatch(addIncome(undefined));
  }, [dispatch]);

  return (
    <View style={styles.page}>
      <ScrollView>
        <View style={styles.row}>
          <SavingsAmountCard />
          <MonthlySavingsCard />
        </View>
        <View style={styles.row}>
          <TransactionsAmountCard
            type={TransactionType.INCOME}
            periodicity={Periodicity.ALL_THE_TIME}
          />
          <TransactionsAmountCard
            type={TransactionType.EXPENSES}
            periodicity={Periodicity.ALL_THE_TIME}
          />
        </View>
        <View style={styles.row}>
          <SavingsForecast />
        </View>
      </ScrollView>
    </View>
  );
};

export default DashboardPage;
