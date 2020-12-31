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
import BookCategoryScreen from '../screens/bookCategoryScreen';
import AccountDetailsScreen from '../screens/accountDetailsScreen';
import UserBooksScreen from '../screens/userBooksScreen';
import ReadingBookScreen from '../screens/readingBookScreen';
import OrdersScreen from '../screens/userOrdersScreen';
import UserAddressesScreen from '../screens/userAddressesScreen';
import AddAddressScreen from '../screens/addAddressScreen';

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
  BookCategoryScreen: {
    name: 'BookCategoryScreen',
    component: BookCategoryScreen,
    options: { headerShown: false },
  },
  AccountDetailsScreen: {
    name: 'AccountDetailsScreen',
    component: AccountDetailsScreen,
    options: { headerShown: false },
  },
  UserBooksScreen: {
    name: 'UserBooksScreen',
    component: UserBooksScreen,
    options: { headerShown: false },
  },
  ReadingBookScreen: {
    name: 'ReadingBookScreen',
    component: ReadingBookScreen,
    options: { headerShown: false },
  },
  OrdersScreen: {
    name: 'OrdersScreen',
    component: OrdersScreen,
    options: { headerShown: false },
  },
  UserAddressesScreen: {
    name: 'UserAddressesScreen',
    component: UserAddressesScreen,
    options: { headerShown: false },
  },
  AddAddressScreen: {
    name: 'AddAddressScreen',
    component: AddAddressScreen,
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
      <Stack.Screen {...StackConfig['BookCategoryScreen']} />
      <Stack.Screen {...StackConfig['AccountDetailsScreen']} />
      <Stack.Screen {...StackConfig['UserBooksScreen']} />
      <Stack.Screen {...StackConfig['ReadingBookScreen']} />
      <Stack.Screen {...StackConfig['OrdersScreen']} />
      <Stack.Screen {...StackConfig['UserAddressesScreen']} />
      <Stack.Screen {...StackConfig['AddAddressScreen']} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
