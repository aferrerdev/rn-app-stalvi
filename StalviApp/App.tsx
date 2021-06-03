import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import StackNavigator from './src/StackNavigator';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
