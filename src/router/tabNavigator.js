import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  Feather,
  AntDesign,
  MaterialCommunityIcons,
  FontAwesome,
} from '@expo/vector-icons';
import { white, fifthColor, gray } from '../utils/colors';
import HomeScreen from '../screens/homeScreen';
import AccountScreen from '../screens/accountScreen';
import BooksScreen from '../screens/booksScreen';

const RouteConfigs = {
  HomeScreen: {
    name: 'HomeScreen',
    component: HomeScreen,
    options: {
      tabBarIcon: ({ tintColor, focused }) => (
        <Feather name="home" size={30} color={focused ? fifthColor : gray} />
      ),
      title: 'Home',
    },
  },
  BooksScreen: {
    name: 'BooksScreen',
    component: BooksScreen,
    options: {
      tabBarIcon: ({ tintColor, focused }) => (
        <Feather name="book" size={30} color={focused ? fifthColor : gray} />
      ),
      title: 'Books',
    },
  },
  AccountScreen: {
    name: 'AccountScreen',
    component: AccountScreen,
    options: {
      tabBarIcon: ({ tintColor, focused }) => (
        <Feather name="user" size={30} color={focused ? fifthColor : gray} />
      ),
      title: 'Account',
    },
  },
};

const TabNavigatorConfig = {
  navigationOptions: {
    header: null,
  },
  tabBarOptions: {
    activeTintColor: fifthColor,
    style: {
      backgroundColor: white,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowRadius: 6,
      shadowOpacity: 1,
    },
  },
};

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator {...TabNavigatorConfig}>
      <Tab.Screen {...RouteConfigs['HomeScreen']} />
      {/* <Tab.Screen {...RouteConfigs['BooksScreen']} /> */}
      <Tab.Screen {...RouteConfigs['AccountScreen']} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
