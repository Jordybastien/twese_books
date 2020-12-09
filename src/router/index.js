import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { fifthColor, bgColor, lightOrange } from '../utils/colors';
import Constants from 'expo-constants';
import { StatusBar, View } from 'react-native';
import MainNav from './stackNavigator';
// import { handleInitialData } from '../actions/initialData';
import { connect } from 'react-redux';

class Router extends Component {
  // componentDidMount() {
  //   this.props.dispatch(handleInitialData());
  // }

  render() {
    return (
      <NavigationContainer>
        <AppStatusBar backgroundColor={fifthColor} barStyle="" />
        <MainNav />
      </NavigationContainer>
    );
  }
}

const AppStatusBar = ({ backgroundColor, ...props }) => {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
};

export default connect()(Router);
