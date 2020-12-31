import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {
  bgColor,
  fifthColor,
  white,
  firstColor,
  lowGray,
  gray,
} from '../../utils/colors';
import moment from 'moment';

const { width, height } = Dimensions.get('window');

const BookCard = ({ props, book }) => {
//   console.log('=====>1', book.BookOrdered.split(','));
//   console.log('=====>2', book.BookOrdered.split(',')[0]);

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.bookContainer}>
        <View style={styles.detailsContainer}>
          <View>
            <Text style={styles.bookTitle}>{book.BookOrdered}</Text>
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={styles.bookAuthor}>
              {moment(book.created_at).format('MMM Do YY')}
            </Text>
          </View>
          <View style={styles.tag}>
            <Text style={styles.tagLabel}>
              {book.amount} {book.currency}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
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
    borderWidth: 1,
    borderColor: lowGray,
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    height: 150,
    width: width - 100,
    justifyContent: 'space-between',
    flex: 1,
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
    flex: 1,
  },
  bookTitle: {
    color: fifthColor,
    fontFamily: 'bold',
    fontSize: 16,
  },
  bookAuthor: {
    color: gray,
    fontFamily: 'regular',
    fontSize: 13,
  },
  detailsContainer: {
    flex: 2,
    marginLeft: 10,
  },
  dotsContainer: {
    alignSelf: 'flex-start',
    paddingRight: 5,
    paddingTop: 5,
  },
  tag: {
    marginTop: 15,
    backgroundColor: fifthColor,
    width: 120,
    height: 30,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tagLabel: {
    fontFamily: 'regular',
    fontSize: 15,
    color: white,
  },
});
