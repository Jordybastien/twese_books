import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { bgColor, fifthColor, white, secondColor } from '../../../utils/colors';
import StarRating from 'react-native-star-rating';
import { Feather } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const BookCard = ({ title, icon, containerColor }) => {
  return (
    <View style={[styles.container, { backgroundColor: containerColor }]}>
      <View style={styles.iconHolder}>
        <Image
          source={{
            uri: icon,
          }}
          style={styles.icon}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
      <View>
        <Feather name="arrow-right" size={24} color={secondColor} />
      </View>
    </View>
  );
};

export default BookCard;

const styles = StyleSheet.create({
  container: {
    marginRight: 7,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    // backgroundColor: fifthColor,
    borderRadius: 10,
    // height: 250,
    paddingBottom: 10,
    width: width - 130,
    height: 180,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bookImg: {
    width: width / 3,
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
  },
  bookTitle: {
    color: white,
    fontFamily: 'bold',
    fontSize: 15,
  },
  bookAuthor: {
    color: white,
    fontFamily: 'regular',
    fontSize: 12,
  },
  icon: {
    width: 60,
    height: 60,
  },
  iconHolder: {
    justifyContent: 'center',
    marginRight: 20,
  },
  title: {
    fontFamily: 'bold',
    fontSize: 20,
    color: secondColor,
  },
  titleContainer: {
    marginTop: 10,
  },
});
