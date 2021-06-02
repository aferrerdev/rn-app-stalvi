import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  page: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

const SavingsPage = () => {
  return (
    <View style={styles.page}>
      <Text>Savings</Text>
    </View>
  );
};

export default SavingsPage;
