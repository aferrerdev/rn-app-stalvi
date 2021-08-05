import {enableScreens} from 'react-native-screens';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import React from 'react';
import HomeTabsPage from './screens/HomeTabsPage/HomeTabsPage';
import LoginPage from './screens/LoginPage/LoginPage';
import RegisterPage from './screens/RegisterPage/RegisterPage';
import AddTransactionPage from './screens/AddTransactionPage/AddTransactionPage';
import AddSavingsPage from './screens/AddSavingsPage/AddSavingsPage';
import SelectTransactionTypePage from './screens/SelectTransactionTypePage/SelectTransactionTypePage';
import SelectMonthsPage from './screens/SelectMonthsPage/SelectMonthsPage';

enableScreens();
const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeTabsPage}
        options={{title: 'Stalvi'}}
      />
      <Stack.Screen name="AddTransaction" component={AddTransactionPage} />
      <Stack.Screen name="AddSavings" component={AddSavingsPage} />
      <Stack.Screen
        name="SelectTransactionType"
        component={SelectTransactionTypePage}
      />
      <Stack.Screen name="SelectMonths" component={SelectMonthsPage} />
      <Stack.Screen name="Register" component={RegisterPage} />
      <Stack.Screen name="Login" component={LoginPage} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
