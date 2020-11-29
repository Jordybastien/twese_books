import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {
  bgColor,
  fifthColor,
  white,
  firstColor,
  lowGray,
  gray,
  secondColor,
  thirdColor,
  fourthColor,
} from '../../../utils/colors';
import StarRating from 'react-native-star-rating';
import { Entypo } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const BookCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bookContainer}>
        <View style={styles.imgContainer}>
          <Image
            source={require('../../../../assets/book.jpg')}
            style={styles.bookImg}
          />
        </View>
        <View style={styles.detailsContainer}>
          <View>
            <Text style={styles.bookTitle}>The First Man On The Moon</Text>
          </View>
          <View style={{ marginBottom: 20 }}>
            <Text style={styles.bookAuthor}>by Laurent Pehem</Text>
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
    alignItems: 'center',
  },
  bookContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: secondColor,
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    height: 150,
    width: width - 100,
    justifyContent: 'space-between',
  },
  bookImg: {
    width: width / 5,
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
    marginRight: 10,
  },
  bookTitle: {
    color: fifthColor,
    fontFamily: 'bold',
    fontSize: 15,
    width: 200,
  },
  bookAuthor: {
    color: gray,
    fontFamily: 'regular',
    fontSize: 12,
  },
  detailsContainer: {},
  dotsContainer: {
    alignSelf: 'flex-start',
    paddingRight: 5,
    paddingTop: 5,
  },
  tag: {
    marginTop: 15,
    backgroundColor: fifthColor,
    width: 70,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tagLabel: {
    fontFamily: 'regular',
    fontSize: 10,
    color: white,
  },
  bookReviews: {
    fontSize: 10,
    fontFamily: 'regular',
    color: gray,
  },
});
