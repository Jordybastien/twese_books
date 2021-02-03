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
import { white, fifthColor, firstColor } from '../../utils/colors';
import * as Animatable from 'react-native-animatable';
import { Grid } from 'react-native-animated-spinkit';
import { connect } from 'react-redux';

const { width, height } = Dimensions.get('window');

const LoadingScreen = (props) => {
  const [showSpinner, setShowSpinner] = useState(true);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/icons/original.png')}
        style={styles.logo}
      />

      {showSpinner && <Grid size={30} color={firstColor} />}
    </View>
  );
};

const mapStateToProps = ({ loading }) => {
  return {
    loading,
  };
};

export default connect(mapStateToProps)(LoadingScreen);

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
