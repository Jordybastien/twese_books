import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import { lightOrange, fifthColor, lowGray } from '../utils/colors';
import { AntDesign } from '@expo/vector-icons';
import BookCard from '../components/homeComponents/bookCategories/newBook';
import { ImageLink, selectColor, colorsPool } from '..//utils/constants';

const { width, height } = Dimensions.get('window');

const AllCategoriesScreen = (props) => {
  const { bookCategories } = props;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <AntDesign name="close" size={24} color={lightOrange} />
          </TouchableOpacity>
        </View>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>All Categories</Text>
        </View>
      </View>
      <View style={styles.scrollView}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {bookCategories.map((category, index) => (
            <BookCard
              title={category.genre_name}
              icon={`${ImageLink}${category.genre_icon}`}
              containerColor={colorsPool[index]}
              props={props}
              id={category.id}
              key={index}
              isHome={false}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const mapStateToProps = ({ bookCategories }) => {
  return {
    bookCategories: bookCategories && Object.values(bookCategories),
  };
};

export default connect(mapStateToProps)(AllCategoriesScreen);

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
    backgroundColor: fifthColor,
  },
  headerTitle: {
    fontFamily: 'bold',
    color: lightOrange,
    fontSize: 18,
  },
  headerTitleContainer: {
    flex: 2,
    alignItems: 'center',
  },
  scrollView: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
});
