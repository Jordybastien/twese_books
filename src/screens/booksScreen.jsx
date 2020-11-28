import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

const { width, height } = Dimensions.get('window');

const BooksScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>BooksScreen</Text>
    </View>
  );
};

export default BooksScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
