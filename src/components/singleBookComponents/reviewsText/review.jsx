import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import StarRating from 'react-native-star-rating';
import { fifthColor, firstColor, gray } from '../../../utils/colors';
import { AntDesign, Feather } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const Review = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.reviewTitleContainer}>
          <Text style={styles.reviewTitle}>Review Title</Text>
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
      <View style={styles.body}>
        <View>
          <Text style={styles.review}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </View>
        <View style={styles.timeStampContainer}>
          <Text style={styles.timeStamp}>Staci, February 22, 2020</Text>
        </View>
      </View>
      <View style={styles.footer}>
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
          {/* <Text style={styles.footerLabel}>90</Text> */}
        </View>
      </View>
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
