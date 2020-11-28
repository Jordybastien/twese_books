import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { bgColor, fifthColor, white, firstColor } from '../../../utils/colors';
import StarRating from 'react-native-star-rating';

const { width, height } = Dimensions.get('window');

const BookCard = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.bookLabel}>Romance</Text>
      </View>
      <View style={styles.imgContainer}>
        <Image
          source={require('../../../../assets/book.jpg')}
          style={styles.bookImg}
        />
      </View>
      <View style={{ paddingLeft: 12 }}>
        <View>
          <Text style={styles.bookTitle}>The case for</Text>
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
      </View>
    </View>
  );
};

export default BookCard;

const styles = StyleSheet.create({
  container: {
    marginRight: 7,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    backgroundColor: fifthColor,
    borderRadius: 10,
    // height: 250,
  },
  bookImg: {
    width: width / 3,
    height: height / 4 - 10,
    resizeMode: 'contain',
    overflow: 'hidden',
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
