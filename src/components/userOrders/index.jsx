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
import SingleBook from './singleBook';

const { width, height } = Dimensions.get('window');

const BookCard = ({ props, book }) => {

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.bookContainer}>
        <View style={styles.orderHeader}>
          <View style={styles.orderNumberContainer}>
            <Text style={styles.orderNumberLabel}>Order # </Text>
            <Text style={styles.orderNumberValue}>
              {Math.floor(Math.random() * 90000) + 10000}
            </Text>
          </View>
          <View style={styles.orderNumberContainer}>
            <Text style={styles.orderNumberLabel}>Order place on </Text>
            <Text style={styles.orderNumberValue}>
              {moment(book.created_at).format('MMMM Do YYYY')}
            </Text>
          </View>
          <View style={styles.orderNumberContainer}>
            <Text style={styles.orderNumberLabel}>Total </Text>
            <Text style={styles.orderNumberValue}>{book.amount}</Text>
          </View>
          <View style={styles.orderNumberContainer}>
            <Text style={styles.orderNumberLabel}>Shipped to </Text>
            <Text style={styles.orderNumberValue}>
              {book.country_name}, {book.town_city},{' '}
              {book.street_address_house_number}, {book.post_code}
            </Text>
          </View>
          <View style={styles.orderNumberContainer}>
            <Text style={styles.orderNumberLabel}>Status </Text>
            <Text style={styles.orderNumberValue}>{book.status}</Text>
          </View>
        </View>
        {book.BookOrdered && book.BookOrdered.length !== 0 && (
          <View style={styles.orderBody}>
            {book.BookOrdered &&
              book.BookOrdered.length !== 0 &&
              book.BookOrdered.map((book, index) => (
                <SingleBook key={index} props={props} book={book} />
              ))}
          </View>
        )}
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
    // flexDirection: 'row',
    // alignItems: 'center',
    borderWidth: 1,
    borderColor: lowGray,
    borderRadius: 10,
    // paddingLeft: 10,
    // paddingRight: 10,
    // height: 150,
    width: width - 50,
    // justifyContent: 'space-between',
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
  orderHeader: {
    backgroundColor: lowGray,
    // width: width - 50,
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    // flex: 1,
  },
  orderNumberLabel: {
    fontFamily: 'regular',
    color: fifthColor,
  },
  orderNumberValue: {
    fontFamily: 'bold',
    color: fifthColor,
  },
  orderNumberContainer: {
    marginBottom: 7,
    flexDirection: 'row',
    width: width - 100,
  },
  orderBody: {
    paddingLeft: 30,
    paddingRight: 10,
    paddingTop: 10,
  },
});
