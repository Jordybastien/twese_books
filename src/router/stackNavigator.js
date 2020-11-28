import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/splashScreen';
import SignupScreen from '../screens/signupScreen';
import LoginScreen from '../screens/loginScreen';
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
  SignupScreen: {
    name: 'SignupScreen',
    component: SignupScreen,
    options: { headerShown: false },
  },
  LoginScreen: {
    name: 'LoginScreen',
    component: LoginScreen,
    options: { headerShown: false },
  },
};
const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator {...StackNavigatorConfig}>
      <Stack.Screen {...StackConfig['SplashScreen']} />
      <Stack.Screen {...StackConfig['HomeScreen']} />
      <Stack.Screen {...StackConfig['SignupScreen']} />
      <Stack.Screen {...StackConfig['LoginScreen']} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
