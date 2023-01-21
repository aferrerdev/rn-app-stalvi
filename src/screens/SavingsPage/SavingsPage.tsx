import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {FAB} from 'react-native-elements';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import SavingsList from '../../components/SavingsList/SavingsList';
import {RootState} from '../../redux/reducers';

const styles = StyleSheet.create({
  page: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

const SavingsPage = () => {
  const navigation = useNavigation();
  const savings = useSelector((state: RootState) => state.balance.saving);
  return (
    <View style={styles.page}>
      <SavingsList savings={savings} />
      <FAB
        icon={<Ionicon name="add" color="white" size={22} />}
        onPress={() => navigation.navigate('AddTransaction')}
        iconPosition="top"
        placement="right"
        visible
      />
    </View>
  );
};

export default SavingsPage;
