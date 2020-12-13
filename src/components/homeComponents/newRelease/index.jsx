import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import SingleBook from './singleBook';
import { Feather } from '@expo/vector-icons';
import { fifthColor, white } from '../../../utils/colors';

const { width, height } = Dimensions.get('window');

const PopularBooks = ({ props, title }) => {
  const { popularBooks } = props;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>{title}</Text>
        </View>
        <TouchableOpacity>
          <Feather name="arrow-right" size={24} color={fifthColor} />
        </TouchableOpacity>
      </View>
      {popularBooks.map((book, index) => (
        <SingleBook key={index} props={props} book={book} />
      ))}
    </View>
  );
};

export default PopularBooks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: white,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  headerTitle: {
    fontFamily: 'bold',
    color: fifthColor,
    fontSize: 20,
  },
});
