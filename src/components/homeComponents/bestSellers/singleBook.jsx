import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { bgColor, fifthColor, white, firstColor } from '../../../utils/colors';
import StarRating from 'react-native-star-rating';

const { width, height } = Dimensions.get('window');

const BookCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          source={require('../../../../assets/book-2.jpg')}
          style={styles.bookImg}
        />
      </View>
    </View>
  );
};

export default BookCard;

const styles = StyleSheet.create({
  container: {
    marginRight: 5,
    paddingTop: 10,
    borderRadius: 10,
    // height: 250,
    paddingBottom: 10,
  },
  bookImg: {
    width: width / 3.5,
    height: height / 4 - 10,
    resizeMode: 'contain',
    overflow: 'hidden',
    borderRadius: 15,
  },
  bookLabel: {
    color: white,
    fontFamily: 'bold',
    fontSize: 15,
  },
  imgContainer: {
    marginTop: 10,
    marginBottom: 10,
  },
  bookTitle: {
    color: white,
    fontFamily: 'bold',
    fontSize: 15,
  },
  bookAuthor: {
    color: white,
    fontFamily: 'regular',
    fontSize: 12,
  },
});
