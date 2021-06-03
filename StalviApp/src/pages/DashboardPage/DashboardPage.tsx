import React from 'react';
import {View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import CardAmount from '../../components/CardAmount';
import SavingsCard from '../../containers/SavingsCard';
import {Periodicity} from '../../redux/types/app.types';
import {styles} from './DashboardPage.theme';

const DashboardPage = () => {
  return (
    <View style={styles.page}>
      <ScrollView>
        <View style={styles.row}>
          <SavingsCard periodicity={Periodicity.ALL_THE_TIME} />
          <SavingsCard periodicity={Periodicity.ALL_THE_TIME} />
        </View>
        <View style={styles.row}>
          <CardAmount title="Income" subtitle="This month" amount={1000} />
          <CardAmount title="Expenses" subtitle="This month" amount={1000} />
        </View>
      </ScrollView>
    </View>
  );
};

export default DashboardPage;
