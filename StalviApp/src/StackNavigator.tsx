import {enableScreens} from 'react-native-screens';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import React from 'react';
import HomeTabsPage from './pages/HomeTabsPage/HomeTabsPage';

enableScreens();
const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Home" component={HomeTabsPage} />
      <Stack.Screen name="Register" component={HomeTabsPage} />
      <Stack.Screen name="Login" component={HomeTabsPage} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
