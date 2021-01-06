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

const { width, height } = Dimensions.get('window');

const bookCategoriesData = [
  { id: 1, label: 'Clothing' },
  { id: 2, label: 'Electronics' },
  { id: 3, label: 'Kitchen' },
  { id: 4, label: 'Music' },
];

const authorsCategoryData = [
  { id: 1, label: 'A. J. Finn' },
  { id: 2, label: 'Anne Frank' },
  { id: 3, label: 'Camille Pagán' },
  { id: 4, label: 'Daniel H. Pink' },
  { id: 5, label: 'Danielle Steel' },
  { id: 6, label: 'David Quammen' },
];

const countriesCategoryData = [
  { id: 1, label: 'United States' },
  { id: 2, label: 'England' },
  { id: 3, label: 'Rwanda' },
  { id: 4, label: 'Uganda' },
  { id: 5, label: 'France' },
];

class FilterScreen extends Component {
  state = {
    selectedBookCategories: [1],
    selectedAuthorCategories: [3],
    selectedCountryCategories: [5],
    rating5: false,
    rating4: false,
    rating3: false,
    rating2: false,
    rating1: true,
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

  render() {
    const { rating5, rating4, rating3, rating2, rating1 } = this.state;
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
            data={bookCategoriesData}
          />
          {/* Author Categories */}
          <CategoriesComponent
            title="Author"
            checkIfSelected={this.checkAuthorCategorySelected}
            handleCategory={this.handleSelectedAuthorCategories}
            data={authorsCategoryData}
          />
          {/* Countries Categories */}
          <CategoriesComponent
            title="Country"
            checkIfSelected={this.checkCountryCategorySelected}
            handleCategory={this.handleSelectedCountryCategories}
            data={countriesCategoryData}
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
            <Button label="Filter" style={styles.filterButton} />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default FilterScreen;

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
