import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { fifthColor, firstColor, lowGray } from '../../../utils/colors';
import Review from './review';
import StarRating from 'react-native-star-rating';
import Button from '../../button';
import TextBox from '../../textBox';

const ReviewsText = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headerTitle}>1-5 of 44 reviews</Text>
      </View>
      <View style={styles.reviews}>
        <Review />
        <Review />
        <Review />
      </View>
      <View style={styles.responseView}>
        <View style={styles.marginBottomHere}>
          <Text style={styles.newReviewTitle}>Write a review</Text>
        </View>
        <View style={[{ flexDirection: 'row' }, styles.marginBottomHere]}>
          <View style={{ marginRight: 15 }}>
            <Text style={styles.newRatingTitle}>Select a rating</Text>
          </View>
          <View>
            <StarRating
              disabled={false}
              emptyStar={'ios-star-outline'}
              fullStar={'ios-star'}
              halfStar={'ios-star-half'}
              iconSet={'Ionicons'}
              maxStars={5}
              rating={0}
              fullStarColor={firstColor}
              starSize={15}
            />
          </View>
        </View>
        <View style={styles.marginBottomHere}>
          <Text style={styles.reviewDetailsTxt}>
            Details please! Your review helps other shoppers.
          </Text>
        </View>
        <View style={styles.marginBottomHere}>
          <TextBox
            name="review"
            label="review"
            passProtected={false}
            multiline={true}
          />
        </View>
        <View>
          <Text style={styles.addTitleTxt}>Add a title</Text>
        </View>
        <View style={styles.marginBottomHere}>
          <TextBox
            name="title"
            label="title"
            passProtected={false}
            multiline={false}
          />
        </View>
        <View>
          <Button label="Submit Review" />
        </View>
      </View>
    </View>
  );
};

export default ReviewsText;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  headerTitle: {
    fontFamily: 'bold',
    color: fifthColor,
    fontSize: 18,
  },
  reviews: {
    marginTop: 10,
    marginBottom: 10,
  },
  newReviewTitle: {
    fontFamily: 'bold',
    color: fifthColor,
    fontSize: 18,
  },
  newRatingTitle: {
    fontFamily: 'bold',
    color: fifthColor,
    fontSize: 15,
  },
  reviewDetailsTxt: {
    fontFamily: 'regular',
    color: fifthColor,
    fontSize: 13,
  },
  marginBottomHere: {
    marginBottom: 15,
  },
  addTitleTxt: {
    fontFamily: 'bold',
    color: fifthColor,
    fontSize: 15,
  },
});
