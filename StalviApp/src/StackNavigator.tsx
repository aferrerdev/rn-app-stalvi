import {enableScreens} from 'react-native-screens';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import React from 'react';
import HomeTabsPage from './pages/HomeTabsPage/HomeTabsPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import AddTransactionPage from './pages/AddTransactionPage/AddTransactionPage';
import AddSavingsPage from './pages/AddSavingsPage/AddSavingsPage';
import SelectTransactionTypePage from './pages/SelectTransactionTypePage/SelectTransactionTypePage';
import SelectMonthsPage from './pages/SelectMonthsPage/SelectMonthsPage';

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
