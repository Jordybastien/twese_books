import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { bgColor, fifthColor, firstColor, gray } from '../../../utils/colors';
import StarRating from 'react-native-star-rating';

const { width, height } = Dimensions.get('window');

const SingleBook = () => {
  return (
    <View style={styles.container}>
      <View style={styles.artWorkHolder}>
        <Image
          source={require('../../../../assets/book.jpg')}
          style={styles.bookImg}
        />
      </View>
      <View style={styles.detailsHolder}>
        <View style={{ marginBottom: 15 }}>
          <Text style={styles.bookTitle}>Meet Cute</Text>
        </View>
        <View>
          <Text style={styles.bookAuthor}>by Victor Davis</Text>
        </View>
        <View style={{ width: 80 }}>
          <StarRating
            disabled={false}
            emptyStar={'ios-star-outline'}
            fullStar={'ios-star'}
            halfStar={'ios-star-half'}
            iconSet={'Ionicons'}
            maxStars={5}
            rating={2.5}
            fullStarColor={firstColor}
            starSize={15}
          />
        </View>
        <View>
          <Text style={styles.bookReviews}>6 reviews</Text>
        </View>
      </View>
    </View>
  );
};

export default SingleBook;

const styles = StyleSheet.create({
  container: {},
  artWorkHolder: {},
  detailsHolder: {},
  bookImg: {
    width: width / 3,
    height: height / 5 - 10,
    resizeMode: 'contain',
    overflow: 'hidden',
  },
  artWorkHolder: {
    marginRight: 10,
    backgroundColor: fifthColor,
    paddingRight: 15,
    paddingLeft: 15,
    borderRadius: 15,
    paddingTop: 10,
    paddingBottom: 10,
  },
  bookTitle: {
    fontFamily: 'bold',
    color: fifthColor,
    fontSize: 15,
  },
  bookAuthor: {
    fontSize: 12,
    fontFamily: 'regular',
    color: gray,
  },
  bookReviews: {
    fontSize: 10,
    fontFamily: 'regular',
    color: gray,
  },
});
