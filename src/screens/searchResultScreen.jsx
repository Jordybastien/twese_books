import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { lightOrange, fifthColor, lowGray } from '../utils/colors';
import { AntDesign } from '@expo/vector-icons';
import SingleBook from '../components/bookCategories/singleBook';

const SearchResultScreen = (props) => {
  const { searchResults, bookCategories } = props;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <AntDesign name="close" size={24} color={fifthColor} />
          </TouchableOpacity>
        </View>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>Results</Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {searchResults.map((book, index) => (
          <SingleBook key={index} props={props} book={book} />
        ))}
      </ScrollView>
    </View>
  );
};

const mapStateToProps = ({ bookCategories, searchResults }) => {
  return {
    bookCategories: bookCategories && Object.values(bookCategories),
    searchResults: searchResults && Object.values(searchResults),
  };
};

export default connect(mapStateToProps)(SearchResultScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightOrange,
  },
  header: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: lowGray,
    borderBottomWidth: 1,
  },
  headerTitle: {
    fontFamily: 'bold',
    color: fifthColor,
    fontSize: 18,
  },
  headerTitleContainer: {
    flex: 2,
    alignItems: 'center',
  },
});
