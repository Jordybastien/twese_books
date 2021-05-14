import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import StarRating from 'react-native-star-rating';
import { fifthColor, firstColor, gray } from '../../../utils/colors';
import { AntDesign, Feather } from '@expo/vector-icons';
import moment from 'moment';

const { width, height } = Dimensions.get('window');

const Review = ({ review }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.reviewTitleContainer}>
          <Text style={styles.reviewTitle}>{review && review.title}</Text>
        </View>
        <View>
          <StarRating
            disabled={false}
            emptyStar={'ios-star-outline'}
            fullStar={'ios-star'}
            halfStar={'ios-star-half'}
            iconSet={'Ionicons'}
            maxStars={5}
            rating={review ? Number(review.review_rating) : 0}
            fullStarColor={firstColor}
            starSize={15}
          />
        </View>
      </View>
      <View style={styles.body}>
        <View>
          <Text style={styles.review}>
            {review && review.review_description}
          </Text>
        </View>
        <View style={styles.timeStampContainer}>
          <Text style={styles.timeStamp}>
            {review && moment(review.created_at).format('MMMM Do YYYY')}
          </Text>
        </View>
      </View>
      {/* <View style={styles.footer}>
        <View style={styles.footerElement}>
          <AntDesign name="like2" size={24} color={fifthColor} />
          <Text style={styles.footerLabel}>90</Text>
        </View>
        <View style={styles.footerElement}>
          <AntDesign name="dislike2" size={24} color={fifthColor} />
          <Text style={styles.footerLabel}>10</Text>
        </View>
        <View style={styles.footerElement}>
          <Feather name="flag" size={24} color={fifthColor} />
          <Text style={styles.footerLabel}>90</Text>
        </View>
      </View> */}
    </View>
  );
};

export default Review;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 30,
  },
  header: {
    flexDirection: 'row',
  },
  reviewTitle: {
    color: fifthColor,
    fontFamily: 'bold',
    fontSize: 16,
  },
  reviewTitleContainer: {
    marginRight: 30,
  },
  review: {
    fontFamily: 'regular',
  },
  timeStamp: {
    color: gray,
    fontFamily: 'italic',
  },
  timeStampContainer: {
    marginTop: 10,
  },
  footer: {
    marginTop: 10,
    flexDirection: 'row',
    width: width / 2,
    justifyContent: 'space-between',
  },
  footerElement: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerLabel: {
    color: gray,
    fontSize: 16,
    marginLeft: 6,
  },
});
