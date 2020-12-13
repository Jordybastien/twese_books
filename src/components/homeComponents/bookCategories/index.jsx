import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Dimensions,
} from 'react-native';
import BookCard from './newBook';
import { lightOrange, white, fifthColor } from '../../../utils/colors';
import { ImageLink, selectColor } from '../../../utils/constants';

const { width, height } = Dimensions.get('window');

const BooksCategories = ({ props }) => {
  const { bookCategories } = props;

  return (
    <ImageBackground
      source={require('../../../../assets/two-bg.jpg')}
      style={{ width }}
    >
      <View style={styles.container}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ paddingLeft: 20 }}
        >
          {bookCategories.map((category, index) => (
            <BookCard
              title={category.genre_name}
              icon={`${ImageLink}${category.genre_icon}`}
              containerColor={selectColor()}
              props={props}
              id={category.id}
              key={index}
            />
          ))}
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default BooksCategories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 20,
    // backgroundColor: white,
    paddingTop: 20,
  },
});
