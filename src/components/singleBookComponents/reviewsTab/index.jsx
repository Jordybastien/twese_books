import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import StarRating from 'react-native-star-rating';
import * as Progress from 'react-native-progress';
import {
  bgColor,
  lightOrange,
  fifthColor,
  white,
  firstColor,
  gray,
  lowGray,
  lightBlue,
} from '../../../utils/colors';

const ReviewsTab = ({ bookInfo }) => {
  
  const reviewsCount = bookInfo[0].Reviews.length;
  const totalReviews =
    bookInfo[0].Reviews.length !== 0
      ? bookInfo[0].Reviews.reduce(
          (total, el) => total + Number(el.review_rating),
          0
        )
      : 0;

  const average = totalReviews / reviewsCount;

  const checkTotalRating = (num) => {
    return bookInfo[0].Reviews.filter((el) => Number(el.review_rating) === num)
      .length;
  };

  return (
    <View style={styles.reviewsTab}>
      <View style={styles.reviewWrapper}>
        <View style={styles.reviewLeftSide}>
          <View>
            <Text style={styles.reviewsAverage}>
              {average ? average.toFixed(1) : 0}
            </Text>
          </View>
          <View>
            <Text style={styles.reviewsCountInTab}>{reviewsCount} reviews</Text>
          </View>
          <View>
            <StarRating
              disabled={false}
              emptyStar={'ios-star-outline'}
              fullStar={'ios-star'}
              halfStar={'ios-star-half'}
              iconSet={'Ionicons'}
              maxStars={5}
              rating={5}
              fullStarColor={firstColor}
              starSize={15}
            />
          </View>
        </View>
        <View style={styles.reviewRightSide}>
          <View style={styles.singleRatingHolder}>
            <View>
              <Text style={styles.progressBarLabel}>5 stars</Text>
            </View>
            <View style={styles.progreBar}>
              <Progress.Bar
                progress={1}
                color={firstColor}
                unfilledColor={lightBlue}
                borderWidth={0}
                height={10}
                borderRadius={9}
                size={5}
                width={120}
              />
            </View>
            <View>
              <Text style={styles.progressBarLabel}>{checkTotalRating(5)}</Text>
            </View>
          </View>
          <View style={styles.singleRatingHolder}>
            <View>
              <Text style={styles.progressBarLabel}>4 stars</Text>
            </View>
            <View style={styles.progreBar}>
              <Progress.Bar
                progress={0.5}
                color={firstColor}
                unfilledColor={lightBlue}
                borderWidth={0}
                height={10}
                borderRadius={9}
                size={5}
                width={120}
              />
            </View>
            <View>
              <Text style={styles.progressBarLabel}>{checkTotalRating(4)}</Text>
            </View>
          </View>
          <View style={styles.singleRatingHolder}>
            <View>
              <Text style={styles.progressBarLabel}>3 stars</Text>
            </View>
            <View style={styles.progreBar}>
              <Progress.Bar
                progress={0.3}
                color={firstColor}
                unfilledColor={lightBlue}
                borderWidth={0}
                height={10}
                borderRadius={9}
                size={5}
                width={120}
              />
            </View>
            <View>
              <Text style={styles.progressBarLabel}>{checkTotalRating(3)}</Text>
            </View>
          </View>
          <View style={styles.singleRatingHolder}>
            <View>
              <Text style={styles.progressBarLabel}>2 stars</Text>
            </View>
            <View style={styles.progreBar}>
              <Progress.Bar
                progress={0}
                color={firstColor}
                unfilledColor={lightBlue}
                borderWidth={0}
                height={10}
                borderRadius={9}
                size={5}
                width={120}
              />
            </View>
            <View>
              <Text style={styles.progressBarLabel}>{checkTotalRating(2)}</Text>
            </View>
          </View>
          <View style={styles.singleRatingHolder}>
            <View>
              <Text style={styles.progressBarLabel}>1 stars</Text>
            </View>
            <View style={styles.progreBar}>
              <Progress.Bar
                progress={0.1}
                color={firstColor}
                unfilledColor={lightBlue}
                borderWidth={0}
                height={10}
                borderRadius={9}
                size={5}
                width={120}
              />
            </View>
            <View>
              <Text style={styles.progressBarLabel}>{checkTotalRating(1)}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ReviewsTab;

const styles = StyleSheet.create({
  reviewsTab: {},
  reviewWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reviewLeftSide: {
    flex: 1,
    alignItems: 'center',
  },
  reviewRightSide: {},
  reviewsAverage: {
    fontSize: 40,
    color: fifthColor,
    fontFamily: 'bold',
  },
  reviewsCountInTab: {
    fontFamily: 'regular',
  },
  singleRatingHolder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  progreBar: {
    marginLeft: 5,
    marginRight: 5,
  },
  progressBarLabel: {
    color: fifthColor,
    fontFamily: 'regular',
  },
});
