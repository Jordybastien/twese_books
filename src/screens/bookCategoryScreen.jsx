import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import { lightOrange, fifthColor, lowGray } from '../utils/colors';
import { AntDesign } from '@expo/vector-icons';
import BookCategories from '../components/bookCategories';

class BookCategoryScreen extends Component {
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <AntDesign name="close" size={24} color={lightOrange} />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 2, alignItems: 'center' }}>
            <Text style={styles.headerTitle}>
              {this.props.genreBooks[0].genre_name}
            </Text>
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <BookCategories
            props={this.props}
          />
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = ({ genreBooks, bookCategories }) => {
  return {
    genreBooks: genreBooks && Object.values(genreBooks),
    bookCategories: bookCategories && Object.values(bookCategories),
  };
};

export default connect(mapStateToProps)(BookCategoryScreen);

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
});
