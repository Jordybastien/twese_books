import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/splashScreen';
import SignupScreen from '../screens/signupScreen';
import LoginScreen from '../screens/loginScreen';
import TabNavigator from './tabNavigator';
import DrawerNavigator from './drawerNavigator';
import SingleBookScreen from '../screens/singleBookScreen';
import AuthorScreen from '../screens/authorScreen';
import CartScreen from '../screens/cartScreen';
import FilterScreen from '../screens/filterScreen';
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
    component: DrawerNavigator,
    options: { headerShown: false },
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
  SingleBookScreen: {
    name: 'SingleBookScreen',
    component: SingleBookScreen,
    options: { headerShown: false },
  },
  AuthorScreen: {
    name: 'AuthorScreen',
    component: AuthorScreen,
    options: { headerShown: false },
  },
  CartScreen: {
    name: 'CartScreen',
    component: CartScreen,
    options: { headerShown: false },
  },
  FilterScreen: {
    name: 'FilterScreen',
    component: FilterScreen,
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
      <Stack.Screen {...StackConfig['SingleBookScreen']} />
      <Stack.Screen {...StackConfig['AuthorScreen']} />
      <Stack.Screen {...StackConfig['CartScreen']} />
      <Stack.Screen {...StackConfig['FilterScreen']} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
