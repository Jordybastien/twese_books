import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import { CheckBox } from 'native-base';
import {
  bgColor,
  white,
  fifthColor,
  firstColor,
  lightOrange,
  orange,
  lowGray,
} from '../utils/colors';
import { connect } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';
import Button from '../components/button';
import CategoriesComponent from '../components/filter/bookCategories';
import StarRating from 'react-native-star-rating';
import _ from 'lodash';
import { getSearchResults } from '../actions/searchResult';
import Toast from 'react-native-toast-message';

const { width, height } = Dimensions.get('window');

class FilterScreen extends Component {
  state = {
    selectedBookCategories: [],
    selectedAuthorCategories: [],
    selectedCountryCategories: [],
    rating5: false,
    rating4: false,
    rating3: false,
    rating2: false,
    rating1: true,
    countries: this.props.countries,
    allAuthors: this.props.allAuthors,
    allBooks: this.props.allBooks,
    bookCategories: this.props.bookCategories,
    catSearch: '',
    authSearch: '',
    countrySearch: '',
  };

  handleSelectedBookCategories = (catId) => {
    const { selectedBookCategories } = this.state;
    const response = this.checkBookCategorySelected(catId);
    const arr = selectedBookCategories;
    arr.push(catId);
    this.setState({
      selectedBookCategories: response
        ? selectedBookCategories.filter((el) => el !== catId)
        : arr,
    });
  };

  handleSelectedAuthorCategories = (catId) => {
    const { selectedAuthorCategories } = this.state;
    const response = this.checkAuthorCategorySelected(catId);
    const arr = selectedAuthorCategories;
    arr.push(catId);
    this.setState({
      selectedAuthorCategories: response
        ? selectedAuthorCategories.filter((el) => el !== catId)
        : arr,
    });
  };

  handleSelectedCountryCategories = (catId) => {
    const { selectedCountryCategories } = this.state;
    const response = this.checkCountryCategorySelected(catId);
    const arr = selectedCountryCategories;
    arr.push(catId);
    this.setState({
      selectedCountryCategories: response
        ? selectedCountryCategories.filter((el) => el !== catId)
        : arr,
    });
  };

  checkBookCategorySelected = (catId) =>
    this.state.selectedBookCategories.some((el) => el === catId);

  checkAuthorCategorySelected = (catId) =>
    this.state.selectedAuthorCategories.some((el) => el === catId);

  checkCountryCategorySelected = (catId) =>
    this.state.selectedCountryCategories.some((el) => el === catId);

  handleCatSearch = (catSearch) => {
    const searchResult = this.state.bookCategories.filter(
      (el) => el.label.toLowerCase() == catSearch.toLowerCase()
    );
    this.setState({
      catSearch,
      bookCategories:
        searchResult.length !== 0 ? searchResult : this.props.bookCategories,
    });
  };
  handleAuthSearch = (authSearch) => {
    const searchResult = this.state.allAuthors.filter(
      (el) => el.label.toLowerCase() == authSearch.toLowerCase()
    );
    this.setState({
      authSearch,
      allAuthors:
        searchResult.length !== 0 ? searchResult : this.props.allAuthors,
    });
  };
  handleCountrySearch = (countrySearch) => {
    const searchResult = this.state.countries.filter(
      (el) => el.label.toLowerCase() == countrySearch.toLowerCase()
    );
    this.setState({
      countrySearch,
      countries:
        searchResult.length !== 0 ? searchResult : this.props.countries,
    });
  };

  handleFilter = () => {
    let catResults = [];
    let authResults = [];
    let countryResults = [];
    const {
      selectedBookCategories,
      selectedAuthorCategories,
      selectedCountryCategories,
    } = this.state;
    if (selectedBookCategories.length !== 0) {
      catResults = selectedBookCategories.map((cat) =>
        this.props.allBooks.filter((el) => el.book_category === cat)
      );
    }
    if (selectedAuthorCategories.length !== 0) {
      authResults = selectedAuthorCategories.map((cat) =>
        this.props.allBooks.filter((el) => el.user_id === cat)
      );
    }
    if (selectedCountryCategories.length !== 0) {
      countryResults = selectedCountryCategories.map((cat) =>
        this.props.allBooks.filter(
          (el) => parseInt(el.book_publication_country) === cat
        )
      );
    }
    const finalResult = _.unionBy(
      catResults,
      authResults,
      countryResults,
      'id'
    );

    if (finalResult.length !== 0 && finalResult[0].length !== 0) {
      this.props.dispatch(getSearchResults(finalResult[0]));
      return this.props.navigation.navigate('SearchResultScreen');
    }
    return Toast.show({
      text1: 'Warning',
      text2: 'Book with those details not found!',
      type: 'error',
    });
  };

  render() {
    const {
      rating5,
      rating4,
      rating3,
      rating2,
      rating1,
      countries,
      allAuthors,
      allBooks,
      bookCategories,
      catSearch,
      countrySearch,
      authSearch,
    } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <AntDesign name="close" size={24} color={fifthColor} />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.headerTitle}>Filter</Text>
          </View>
          <TouchableOpacity
            style={styles.resetContainer}
            onPress={() =>
              this.setState({
                selectedBookCategories: [],
                selectedAuthorCategories: [],
                selectedCountryCategories: [],
                rating5: false,
                rating4: false,
                rating3: false,
                rating2: false,
                rating1: false,
                countries: this.props.countries,
                allAuthors: this.props.allAuthors,
                allBooks: this.props.allBooks,
                bookCategories: this.props.bookCategories,
                catSearch: '',
                authSearch: '',
                countrySearch: '',
              })
            }
          >
            <Text style={styles.resetLabel}>Reset</Text>
          </TouchableOpacity>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
          {/* Book Categories */}
          <CategoriesComponent
            title="Categories"
            checkIfSelected={this.checkBookCategorySelected}
            handleCategory={this.handleSelectedBookCategories}
            data={bookCategories}
            onChangeText={this.handleCatSearch}
            value={catSearch}
          />
          {/* Author Categories */}
          <CategoriesComponent
            title="Author"
            checkIfSelected={this.checkAuthorCategorySelected}
            handleCategory={this.handleSelectedAuthorCategories}
            data={allAuthors}
            onChangeText={this.handleAuthSearch}
            value={authSearch}
          />
          {/* Countries Categories */}
          <CategoriesComponent
            title="Country"
            checkIfSelected={this.checkCountryCategorySelected}
            handleCategory={this.handleSelectedCountryCategories}
            data={countries}
            onChangeText={this.handleCountrySearch}
            value={countrySearch}
          />
          {/* <View style={styles.categoryContainer}>
            <View style={styles.categoryTitleContainer}>
              <Text style={styles.categoryTitle}>Reviews</Text>
            </View>
            <View style={styles.categoryBody}>
              <View style={styles.singleRatingContainer}>
                <View style={styles.checkBoxContainer}>
                  <CheckBox
                    checked={rating5}
                    color={fifthColor}
                    onPress={() => this.setState({ rating5: !rating5 })}
                  />
                </View>
                <View style={styles.ratingContainer}>
                  <StarRating
                    disabled={false}
                    emptyStar={'ios-star-outline'}
                    fullStar={'ios-star'}
                    halfStar={'ios-star-half'}
                    iconSet={'Ionicons'}
                    maxStars={5}
                    rating={5}
                    fullStarColor={firstColor}
                    starSize={25}
                  />
                </View>
                <View style={styles.ratingLabelContainer}>
                  <Text style={styles.ratingLabel}>(24)</Text>
                </View>
              </View>
              <View style={styles.singleRatingContainer}>
                <View style={styles.checkBoxContainer}>
                  <CheckBox
                    checked={rating4}
                    color={fifthColor}
                    onPress={() => this.setState({ rating4: !rating4 })}
                  />
                </View>
                <View style={styles.ratingContainer}>
                  <StarRating
                    disabled={false}
                    emptyStar={'ios-star-outline'}
                    fullStar={'ios-star'}
                    halfStar={'ios-star-half'}
                    iconSet={'Ionicons'}
                    maxStars={5}
                    rating={4}
                    fullStarColor={firstColor}
                    starSize={25}
                  />
                </View>
                <View style={styles.ratingLabelContainer}>
                  <Text style={styles.ratingLabel}>(15)</Text>
                </View>
              </View>
              <View style={styles.singleRatingContainer}>
                <View style={styles.checkBoxContainer}>
                  <CheckBox
                    checked={rating3}
                    color={fifthColor}
                    onPress={() => this.setState({ rating3: !rating3 })}
                  />
                </View>
                <View style={styles.ratingContainer}>
                  <StarRating
                    disabled={false}
                    emptyStar={'ios-star-outline'}
                    fullStar={'ios-star'}
                    halfStar={'ios-star-half'}
                    iconSet={'Ionicons'}
                    maxStars={5}
                    rating={3}
                    fullStarColor={firstColor}
                    starSize={25}
                  />
                </View>
                <View style={styles.ratingLabelContainer}>
                  <Text style={styles.ratingLabel}>(43)</Text>
                </View>
              </View>
              <View style={styles.singleRatingContainer}>
                <View style={styles.checkBoxContainer}>
                  <CheckBox
                    checked={rating2}
                    color={fifthColor}
                    onPress={() => this.setState({ rating2: !rating2 })}
                  />
                </View>
                <View style={styles.ratingContainer}>
                  <StarRating
                    disabled={false}
                    emptyStar={'ios-star-outline'}
                    fullStar={'ios-star'}
                    halfStar={'ios-star-half'}
                    iconSet={'Ionicons'}
                    maxStars={5}
                    rating={2}
                    fullStarColor={firstColor}
                    starSize={25}
                  />
                </View>
                <View style={styles.ratingLabelContainer}>
                  <Text style={styles.ratingLabel}>(78)</Text>
                </View>
              </View>
              <View style={styles.singleRatingContainer}>
                <View style={styles.checkBoxContainer}>
                  <CheckBox
                    checked={rating1}
                    color={fifthColor}
                    onPress={() => this.setState({ rating1: !rating1 })}
                  />
                </View>
                <View style={styles.ratingContainer}>
                  <StarRating
                    disabled={false}
                    emptyStar={'ios-star-outline'}
                    fullStar={'ios-star'}
                    halfStar={'ios-star-half'}
                    iconSet={'Ionicons'}
                    maxStars={5}
                    rating={1}
                    fullStarColor={firstColor}
                    starSize={25}
                  />
                </View>
                <View style={styles.ratingLabelContainer}>
                  <Text style={styles.ratingLabel}>(21)</Text>
                </View>
              </View>
            </View>
          </View> */}
          <View style={styles.buttonHolder}>
            <Button
              label="Filter"
              style={styles.filterButton}
              toExecuteOnClick={this.handleFilter}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = ({
  allAuthors,
  allBooks,
  authedUser,
  countries,
  bookCategories,
}) => {
  return {
    countries:
      countries &&
      Object.values(countries).map(({ id, country_name }) => ({
        label: country_name,
        id,
      })),
    allAuthors:
      allAuthors &&
      Object.values(allAuthors).map(({ id, name }) => ({
        label: name,
        id,
      })),
    allBooks: Object.values(allBooks),
    authedUser,
    bookCategories:
      bookCategories &&
      Object.values(bookCategories).map(({ id, genre_name }) => ({
        label: genre_name,
        id,
      })),
  };
};

export default connect(mapStateToProps)(FilterScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightOrange,
  },
  header: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontFamily: 'bold',
    color: fifthColor,
    fontSize: 18,
  },
  resetContainer: {
    backgroundColor: orange,
    padding: 10,
    borderRadius: 5,
  },
  resetLabel: {
    color: white,
    fontFamily: 'regular',
  },
  categoryContainer: {
    padding: 20,
    borderBottomColor: lowGray,
    borderBottomWidth: 1,
    paddingTop: 10,
    marginBottom: 20,
  },
  categoryTitleContainer: {
    marginBottom: 20,
  },
  categoryTitle: {
    fontFamily: 'bold',
    color: fifthColor,
    fontSize: 15,
  },
  categoryBody: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  bookCategoryContainer: {
    padding: 10,
    borderColor: fifthColor,
    borderWidth: 2,
    borderRadius: 20,
    marginRight: 10,
    flexDirection: 'row',
    marginBottom: 10,
  },
  bookCategoryTitle: {
    fontFamily: 'regular',
    color: fifthColor,
  },
  selctedBookCategoryTitle: { color: white },
  selctedBookCategoryContainer: {
    backgroundColor: fifthColor,
  },
  buttonHolder: {
    // position: 'absolute',
    // bottom: 0,
    // justifyContent: 'center',
    paddingBottom: 50,
    // paddingLeft: width / 2,
    // paddingRight: width / 2,
    marginTop: 30,
  },
  filterButton: {},
  singleRatingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkBoxContainer: {},
  ratingContainer: {
    marginLeft: 20,
    marginRight: 10,
  },
  ratingLabelContainer: {},
  ratingLabel: {
    fontFamily: 'bold',
    fontSize: 15,
    color: fifthColor,
  },
});
