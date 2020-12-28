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
import { fifthColor, white } from '../../utils/colors';

const { width, height } = Dimensions.get('window');

const UserBooksComponent = ({ props, title }) => {
  const { userBooks, bookCategories } = props;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {title && (
          <View>
            <Text style={styles.headerTitle}>{title}</Text>
          </View>
        )}
      </View>
      {userBooks.map((book, index) => (
        <SingleBook key={index} props={props} book={book} />
      ))}
    </View>
  );
};

export default UserBooksComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 20,
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
