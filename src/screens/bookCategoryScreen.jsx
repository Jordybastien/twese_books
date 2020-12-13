import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import { lightOrange, fifthColor } from '../utils/colors';
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
              <AntDesign name="close" size={24} color={fifthColor} />
            </TouchableOpacity>
          </View>
          {/* <View style={{ flex: 2, alignItems: 'center' }}>
            <Text style={styles.headerTitle}></Text>
          </View> */}
          <ScrollView showsVerticalScrollIndicator={false}>
            <BookCategories
              props={this.props}
              title={this.props.genreBooks[0].genre_name}
            />
          </ScrollView>
        </View>
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
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
  },
});
