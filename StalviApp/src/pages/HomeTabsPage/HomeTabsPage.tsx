import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DashboardPage from '../DashboardPage/DashboardPage';
import ExpensesPage from '../ExpensesPage/ExpensesPage';
import Ionicon from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ProfilePage from '../ProfilePage/ProfilePage';
import IncomePage from '../IncomePage/IncomePage';
import SavingsPage from '../SavingsPage/SavingsPage';

const Tab = createBottomTabNavigator();

const tabBarOptions = {
  //activeTintColor: 'black',
  //inactiveTintColor: 'blue',
};

const HomeTabsPage = () => {
  return (
    <Tab.Navigator initialRouteName="Dashboard" tabBarOptions={tabBarOptions}>
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicon name="pie-chart-outline" color={color} size={size} />
          ),
        }}
        name="Dashboard"
        component={DashboardPage}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="money-check-alt" color={color} size={size} />
          ),
        }}
        name="Expenses"
        component={ExpensesPage}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="donate" color={color} size={size} />
          ),
        }}
        name="Income"
        component={IncomePage}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="piggy-bank" color={color} size={size} />
          ),
        }}
        name="Savings"
        component={SavingsPage}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicon name="person-circle-outline" color={color} size={size} />
          ),
        }}
        name="Profile"
        component={ProfilePage}
      />
    </Tab.Navigator>
  );
};

export default HomeTabsPage;
