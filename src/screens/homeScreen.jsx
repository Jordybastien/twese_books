import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Header from '../components/homeComponents/header';
import Banner from '../components/homeComponents/banner';
import { bgColor, lightOrange } from '../utils/colors';
import BooksCategories from '../components/homeComponents/bookCategories';
import BestSellers from '../components/homeComponents/bestSellers';
import NewReleases from '../components/homeComponents/newRelease';
import FeaturedBooks from '../components/homeComponents/featuredBooks';
import WeekDeals from '../components/homeComponents/weekDeals';

const { width, height } = Dimensions.get('window');

const HomeScreen = (props) => {
  return (
    <View style={styles.container}>
      <Header props={props} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Banner />
        <BooksCategories />
        {/* <BestSellers /> */}
        <NewReleases />
        <FeaturedBooks />
        <WeekDeals />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: lightOrange,
  },
});
