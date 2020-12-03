import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { fifthColor } from '../../../utils/colors';
import Review from './review';

const ReviewsText = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headerTitle}>1-5 of 44 reviews</Text>
      </View>
      <View style={styles.reviews}>
          <Review/>
          <Review/>
          <Review/>
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
});
