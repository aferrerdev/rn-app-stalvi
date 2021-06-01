import {enableScreens} from 'react-native-screens';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import React from 'react';
import HomeTabsPage from './pages/HomeTabsPage';

enableScreens();
const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeTabsPage} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
