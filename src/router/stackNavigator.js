import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/splashScreen';
import TabNavigator from './tabNavigator';
import { blue, white } from '../utils/colors';

const StackNavigatorConfig = {
  headerMode: 'screen',
};
const StackConfig = {
  SplashScreen: {
    name: 'SplashScreen',
    component: SplashScreen,
    options: { headerShown: false },
  },
  HomeScreen: {
    name: 'HomeScreen',
    component: TabNavigator,
    options: { headerShown: false },
    // options: {
    //   headerShown: true,
    //   headerStyle: {
    //     backgroundColor: blue,
    //   },
    //   headerTintColor: white,
    //   title: 'Minicom-CBTC',
    //   headerLeft: null,
    // },
  },

};
const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator {...StackNavigatorConfig}>
      <Stack.Screen {...StackConfig['SplashScreen']} />
      <Stack.Screen {...StackConfig['HomeScreen']} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
