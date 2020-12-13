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
import NewRelease from '../components/homeComponents/featuredBooks';
import PopularBooks from '../components/homeComponents/newRelease';
import WeekDeals from '../components/homeComponents/weekDeals';
import { connect } from 'react-redux';

const { width, height } = Dimensions.get('window');

const HomeScreen = (props) => {
  return (
    <View style={styles.container}>
      <Header props={props} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Banner props={props} />
        <BooksCategories props={props} />
        {/* <BestSellers /> */}
        <NewRelease props={props} />
        <PopularBooks props={props} title="Popular Books" />
        <WeekDeals props={props} />
      </ScrollView>
    </View>
  );
};

const mapStateToProps = ({ popularBooks, bookCategories, newRelease }) => {
  return {
    popularBooks: popularBooks && Object.values(popularBooks),
    bookCategories: bookCategories && Object.values(bookCategories),
    newRelease: newRelease && Object.values(newRelease),
  };
};

export default connect(mapStateToProps)(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: lightOrange,
  },
});
