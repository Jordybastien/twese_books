import React, { useState } from 'react';
import { TextInput, StyleSheet, View, Text, Dimensions } from 'react-native';
import { fifthColor, gray, white, lowGray } from '../../utils/colors';

const { width, height } = Dimensions.get('window');

const TextBox = ({ name, label, passProtected }) => {
  const [focused, setFocused] = useState(false);
  return (
    <View style={styles.container}>
      {/* <View style={styles.titleContainer}>
        <Text style={styles.title}>First Name</Text>
      </View> */}
      <TextInput
        style={[styles.txtBox, focused && styles.focusedTxt]}
        placeholder={label}
        onBlur={() => setFocused(false)}
        onFocus={() => setFocused(true)}
        autoCapitalize="none"
        secureTextEntry={passProtected}
      />
    </View>
  );
};

export default TextBox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: width - 100,
  },
  txtBox: {
    width: width - 100,
    borderBottomColor: lowGray,
    borderBottomWidth: 1,
    paddingBottom: 10,
    paddingTop: 10,
    fontFamily: 'regular',
  },
  focusedTxt: {
    borderBottomColor: fifthColor,
    borderBottomWidth: 2,
  },
  titleContainer: {
    width: width - 100,
  },
  title: {
    fontFamily: 'regular',
    color: gray,
  },
});
