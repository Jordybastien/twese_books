import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './tabNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigatorConfig = {
  drawerType: 'front',
  drawerStyle: {
    // backgroundColor: 'red',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
};

const DrawerConfig = {
  Home: {
    name: 'Home',
    component: TabNavigator,
    options: {},
    style:{
      backgroundColor:'red'
    }
  },
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator {...DrawerNavigatorConfig}>
      <Drawer.Screen {...DrawerConfig['Home']} />
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;
