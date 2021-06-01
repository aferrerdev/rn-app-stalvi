import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DashboardPage from './DashboardPage';

const Tab = createBottomTabNavigator();

const HomeTabsPage = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={DashboardPage} />
      <Tab.Screen name="Expenses" component={DashboardPage} />
      <Tab.Screen name="Income" component={DashboardPage} />
      <Tab.Screen name="Savings" component={DashboardPage} />
      <Tab.Screen name="Profile" component={DashboardPage} />
    </Tab.Navigator>
  );
};

export default HomeTabsPage;
