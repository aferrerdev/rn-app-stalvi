import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  page: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

const IncomePage = () => {
  return (
    <View style={styles.page}>
      <Text>Incomes</Text>
    </View>
  );
};

export default IncomePage;
