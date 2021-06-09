import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';

const styles = StyleSheet.create({
  page: {flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start'},
});

const AddTransactionPage = () => {
  return (
    <View style={styles.page}>
      <Text>Add</Text>
    </View>
  );
};

export default AddTransactionPage;
