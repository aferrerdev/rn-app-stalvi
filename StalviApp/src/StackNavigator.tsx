import {enableScreens} from 'react-native-screens';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import React from 'react';
import HomeTabsPage from './pages/HomeTabsPage/HomeTabsPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';

enableScreens();
const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeTabsPage} />
      <Stack.Screen name="Register" component={RegisterPage} />
      <Stack.Screen name="Login" component={LoginPage} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
