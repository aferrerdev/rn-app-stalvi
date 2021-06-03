import React from 'react';
import {View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Periodicity, TransactionType} from '../../interfaces/interfaces';
import TotalAmountCard from '../../containers/TotalAmountCard';
import {styles} from './DashboardPage.theme';

const DashboardPage = () => {
  return (
    <View style={styles.page}>
      <ScrollView>
        <View style={styles.row}>
          <TotalAmountCard
            type={TransactionType.SAVINGS}
            periodicity={Periodicity.ALL_THE_TIME}
          />
          <TotalAmountCard
            type={TransactionType.SAVINGS}
            periodicity={Periodicity.ALL_THE_TIME}
          />
        </View>
        <View style={styles.row}>
          <TotalAmountCard
            type={TransactionType.EXPENSES}
            periodicity={Periodicity.ALL_THE_TIME}
          />
          <TotalAmountCard
            type={TransactionType.INCOME}
            periodicity={Periodicity.ALL_THE_TIME}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default DashboardPage;
