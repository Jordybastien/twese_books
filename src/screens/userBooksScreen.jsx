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
import UserBooksComponent from '../components/userBooks';

const UserBooksScreen = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <AntDesign name="close" size={24} color={fifthColor} />
          </TouchableOpacity>
        </View>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>My Books</Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <UserBooksComponent props={props} />
      </ScrollView>
    </View>
  );
};

const mapStateToProps = ({ userBooks, bookCategories }) => {
  return {
    userBooks: userBooks && Object.values(userBooks).reverse(),
    bookCategories: bookCategories && Object.values(bookCategories),
  };
};

export default connect(mapStateToProps)(UserBooksScreen);

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
