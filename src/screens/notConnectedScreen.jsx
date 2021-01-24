import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { lightOrange, fifthColor, gray, lowLightBlue } from '../utils/colors';

const { width, height } = Dimensions.get('window');

const NotConnectedScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/offline.png')}
        style={styles.offlineLogo}
      />
      <Text style={styles.notConnectedLabel}>Not Connected</Text>
    </View>
  );
};

export default NotConnectedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: lightOrange,
  },
  notConnectedLabel: {
    color: lowLightBlue,
  },
  offlineLogo: {
    // marginBottom: 10,
    width: width / 4,
    height: height / 8,
    resizeMode: 'contain',
    tintColor: lowLightBlue,
  },
});
