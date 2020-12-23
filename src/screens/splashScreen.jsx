import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ImageBackground,
  Platform,
} from 'react-native';
import { Spinner } from 'native-base';
import { useFonts } from '@use-expo/font';
import { white, fifthColor, firstColor } from '../utils/colors';
// import LoginScreen from './loginScreen';
import * as Animatable from 'react-native-animatable';
import { Grid } from 'react-native-animated-spinkit';
import { connect } from 'react-redux';
import { checkToken } from '../services/auth';
import { deleteToken, deleteUserInfo } from '../utils/storage';
import { setAuthedUser } from '../actions/authedUser';

const { width, height } = Dimensions.get('window');

const SplashScreen = (props) => {
  const [showSpinner, setShowSpinner] = useState(false);

  const [isFontLoaded] = useFonts({
    regular: require('../../assets/fonts/Montserrat-Regular.ttf'),
    bold: require('../../assets/fonts/Montserrat-Bold.ttf'),
    semiBold: require('../../assets/fonts/Montserrat-SemiBold.ttf'),
    italic: require('../../assets/fonts/Montserrat-Italic.ttf'),
  });

  useEffect(() => {
    let timer1 = setTimeout(() => {
      setShowSpinner(true);
    }, 3000);

    let timer2 = setTimeout(async () => {
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
        } else {
          props.dispatch(setAuthedUser(user));
          props.navigation.reset({
            index: 0,
            routes: [{ name: 'HomeScreen' }],
          });
        }
      } else {
        props.navigation.reset({
          index: 0,
          routes: [{ name: 'LoginScreen' }],
        });
      }
    }, 8000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/icons/original.png')}
        style={styles.logo}
      />

      {showSpinner && <Grid size={30} color={firstColor} />}
    </View>
  );
};

const mapStateToProps = ({ loading }) => {
  return {
    loading,
    // isAuth: Object.keys(authedUser).length !== 0,
  };
};

export default connect(mapStateToProps)(SplashScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width,
    height,
    backgroundColor: fifthColor,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  logo: {
    marginBottom: 100,
    width: width - 100,
    height: height / 2,
    resizeMode: 'contain',
  },
});
