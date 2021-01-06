import React, { Component } from 'react';
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
import { refreshUser } from '../router';
import { handleAuthedData } from '../actions/initialData';
import { getCart } from '../utils/storage';

const { width, height } = Dimensions.get('window');

class HomeScreen extends Component {
  state = {
    cartItems: [],
  };
  componentDidMount() {
    refreshUser(this.props).then((user) => {
      if (user) {
        this.props.dispatch(handleAuthedData(user.id));
      }
    });
    getCart().then((cartItems) => {
      cartItems && this.setState({ cartItems });
    });
  }
  render() {
    const { cartItems } = this.state;
    return (
      <View style={styles.container}>
        <Header props={this.props} cartItems={cartItems} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Banner props={this.props} />
          <BooksCategories props={this.props} />
          {/* <BestSellers /> */}
          <NewRelease props={this.props} />
          <PopularBooks props={this.props} title="Popular Books" />
          <WeekDeals props={this.props} />
        </ScrollView>
      </View>
    );
  }
}

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
