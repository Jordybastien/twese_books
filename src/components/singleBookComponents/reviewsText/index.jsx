import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { fifthColor, firstColor, lowGray } from '../../../utils/colors';
import Review from './review';
import StarRating from 'react-native-star-rating';
import Button from '../../button';
import TextBox from '../../textBox';
import { handleAddReview } from '../../../actions/review';
import Toast from 'react-native-toast-message';

const ReviewsText = ({ bookInfo, isAuth, authedUser, dispatch }) => {
  const [reviewRating, setReviewRating] = useState(0);
  const [reviewTitle, setReviewTitle] = useState('');
  const [reviewDescription, setReviewDescription] = useState('');
  const [loading, setLoading] = useState(false);

  const sendReview = () => {
    const { response, data } = validateData();
    if (response) {
      setLoading(true);
      dispatch(handleAddReview(data)).then((res) => {
        setLoading(false);
        if (res.type !== 'LOG_ERROR') {
          Toast.show({
            text1: 'Success',
            text2: 'Review Added Successfully',
            type: 'success',
          });
        } else
          Toast.show({
            text1: 'Warning',
            text2: res.error,
            type: 'error',
          });
      });
    }
  };

  const validateData = () => {
    let response = true;
    let errorMessage = '';

    if (!reviewDescription) {
      response = false;
      errorMessage = 'Review description is required';
    }

    if (!reviewTitle) {
      response = false;
      errorMessage = 'Review title is required';
    }

    if (reviewRating === 0) {
      response = false;
      errorMessage = 'Please pick a rating';
    }

    let data = {};

    data.user_id = authedUser.id;
    data.book_id = bookInfo[0].id;
    data.review_title = reviewTitle;
    data.review_rating = reviewRating;
    data.review_description = reviewDescription;

    errorMessage &&
      Toast.show({
        text1: 'Warning',
        text2: errorMessage,
        type: 'error',
      });
    return { response, data };
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headerTitle}>
          {bookInfo[0].Reviews.length ?? 0} reviews
        </Text>
      </View>
      <View style={styles.reviews}>
        {bookInfo[0].Reviews.map((review, index) => (
          <Review key={index} review={review} />
        ))}
      </View>
      {isAuth && (
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
                rating={reviewRating}
                fullStarColor={firstColor}
                starSize={15}
                selectedStar={(star) => setReviewRating(star)}
              />
            </View>
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
              value={reviewTitle}
              onChangeText={(reviewTitle) => setReviewTitle(reviewTitle)}
            />
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
              value={reviewDescription}
              onChangeText={(reviewDescription) =>
                setReviewDescription(reviewDescription)
              }
            />
          </View>

          <View>
            <Button
              label="Submit Review"
              loading={loading}
              toExecuteOnClick={sendReview}
            />
          </View>
        </View>
      )}
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
