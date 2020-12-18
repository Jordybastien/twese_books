import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './tabNavigator';
import DrawerContent from '../components/drawerContent';

const Drawer = createDrawerNavigator();

const DrawerNavigatorConfig = {
  drawerType: 'front',
};

const DrawerConfig = {
  Home: {
    name: 'Home',
    component: TabNavigator,
    options: {},
    style: {
      backgroundColor: 'red',
    },
  },
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      {...DrawerNavigatorConfig}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen {...DrawerConfig['Home']} />
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;
