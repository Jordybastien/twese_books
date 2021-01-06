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
} from '../../utils/colors';
import StarRating from 'react-native-star-rating';
import { Entypo } from '@expo/vector-icons';
import { BookCover } from '../../utils/constants';
import { handleFetchBookInfo } from '../../actions/bookInfo';

const { width, height } = Dimensions.get('window');

const findBookCategory = (bookCategories, catId) => {
  const category = bookCategories.filter((book) => book.id == catId);
  return category.length !== 0 && category[0].genre_name;
};

const BookCard = ({ props, book }) => {
  const { bookCategories } = props;
  const handleBookInfo = () => {
    props
      .dispatch(handleFetchBookInfo(book.id))
      .then(() => props.navigation.navigate('SingleBookScreen'));
  };
  return (
    <TouchableOpacity style={styles.container} onPress={handleBookInfo}>
      <View style={styles.bookContainer}>
        <View style={styles.imgContainer}>
          <Image
            source={{
              uri: `${BookCover}${book.book_image_name}`,
            }}
            style={styles.bookImg}
          />
        </View>
        <View style={styles.detailsContainer}>
          <View>
            <Text style={styles.bookTitle}>{book.book_name}</Text>
          </View>
          <View>
            <Text style={styles.bookAuthor}>{book.name}</Text>
          </View>
          <View style={styles.tag}>
            <Text style={styles.tagLabel}>
              {findBookCategory(bookCategories, book.book_category)}
            </Text>
          </View>
        </View>
        {/* <TouchableOpacity style={styles.dotsContainer}>
          <Entypo name="dots-three-horizontal" size={24} color={lowGray} />
        </TouchableOpacity> */}
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
    // width: 150,
  },
  bookAuthor: {
    color: gray,
    fontFamily: 'regular',
    fontSize: 12,
  },
  detailsContainer: {
    flex: 2,
  },
  dotsContainer: {
    alignSelf: 'flex-start',
    paddingRight: 5,
    paddingTop: 5,
  },
  tag: {
    marginTop: 15,
    backgroundColor: fifthColor,
    // width: 70,
    paddingTop:5,
    paddingBottom:5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tagLabel: {
    fontFamily: 'regular',
    fontSize: 10,
    color: white,
  },
});
