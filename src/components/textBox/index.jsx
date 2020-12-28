import React, { useState } from 'react';
import { TextInput, StyleSheet, View, Text, Dimensions } from 'react-native';
import { fifthColor, gray, white, lowGray } from '../../utils/colors';

const { width, height } = Dimensions.get('window');

const TextBox = ({
  name,
  label,
  passProtected,
  multiline,
  onChangeText,
  value,
}) => {
  const [focused, setFocused] = useState(false);
  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.txtBox, focused && styles.focusedTxt]}
        placeholder={label}
        onBlur={() => setFocused(false)}
        onFocus={() => setFocused(true)}
        autoCapitalize="none"
        multiline={multiline}
        height={multiline ? 100 : 50}
        secureTextEntry={passProtected}
        onChangeText={onChangeText}
        value={value}
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
