import React, { useState } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  Dimensions,
} from 'react-native';
import { fifthColor, gray, white, lowGray } from '../../utils/colors';
import { Spinner } from 'native-base';

const { width, height } = Dimensions.get('window');

const Button = ({ label, toExecuteOnClick, loading }) => {
  return (
    <View style={styles.btnContainer}>
      <TouchableOpacity style={styles.buttonHolder} onPress={toExecuteOnClick}>
        <View style={styles.buttonContainer}>
          {loading ? (
            <Spinner color={white} />
          ) : (
            <Text style={styles.btnLabel}>{label}</Text>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: width - 100,
  },
  btnContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonHolder: {
    backgroundColor: fifthColor,
    width: width - 100,
    height: 60,
    borderRadius: 5,
  },
  buttonHolderLoading: {
    backgroundColor: fifthColor,
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnLabel: {
    color: white,
    fontFamily: 'bold',
    fontSize: 15,
  },
});
