import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { fifthColor, bgColor, lightOrange } from '../utils/colors';
import Constants from 'expo-constants';
import { StatusBar, View } from 'react-native';
import MainNav from './stackNavigator';
import { handleInitialData, handleAuthedData } from '../actions/initialData';
import { connect } from 'react-redux';
import Toast from 'react-native-toast-message';
import { checkToken } from '../services/auth';
import { deleteToken, deleteUserInfo } from '../utils/storage';
import { setAuthedUser } from '../actions/authedUser';

class Router extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
    refreshUser(this.props).then((user) => {
      if (user) {
        this.props.dispatch(handleAuthedData(user.id));
      }
    });
  }

  render() {
    refreshUser(this.props);
    return (
      <NavigationContainer>
        <AppStatusBar backgroundColor={fifthColor} barStyle="" />
        <MainNav />
        <Toast ref={(ref) => Toast.setRef(ref)} />
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

export const refreshUser = async (props) => {
  const { token, user } = await checkToken();

  if (token && user) {
    const currentTime = Date.now() / 1000;
    if (token.exp < currentTime) {
      await deleteToken();
      await deleteUserInfo();
      props.navigation.reset({
        index: 0,
        routes: [{ name: 'LoginScreen' }],
      });
    }
    props.dispatch(setAuthedUser(user));
    return user;
  }
};
