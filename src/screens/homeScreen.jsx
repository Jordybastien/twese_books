import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Header from '../components/homeComponents/header';
import Banner from '../components/homeComponents/banner';
import { bgColor } from '../utils/colors';
import BooksCategories from '../components/homeComponents/bookCategories';

const { width, height } = Dimensions.get('window');

const HomeScreen = (props) => {
  return (
    <View style={styles.container}>
      <Header />
      <Banner />
      <BooksCategories />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: bgColor,
  },
});
