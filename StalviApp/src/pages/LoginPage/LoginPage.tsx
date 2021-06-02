import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  page: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

const LoginPage = () => {
  return (
    <View style={styles.page}>
      <Text>Login</Text>
    </View>
  );
};

export default LoginPage;
