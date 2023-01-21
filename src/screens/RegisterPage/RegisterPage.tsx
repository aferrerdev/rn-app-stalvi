import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  page: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

const RegisterPage = () => {
  return (
    <View style={styles.page}>
      <Text>Register</Text>
    </View>
  );
};

export default RegisterPage;
