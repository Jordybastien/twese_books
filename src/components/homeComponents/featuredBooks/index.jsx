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
import { fifthColor } from '../../../utils/colors';

const { width, height } = Dimensions.get('window');

const BestSellers = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>Featured Books</Text>
        </View>
        <TouchableOpacity>
          <Feather name="arrow-right" size={24} color={fifthColor} />
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ flexDirection: 'row', paddingLeft: 20 }}
      >
        <SingleBook />
        <SingleBook />
        <SingleBook />
        <SingleBook />
        <SingleBook />
        <SingleBook />
      </ScrollView>
    </View>
  );
};

export default BestSellers;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
    marginLeft: 5,
  },
  header: {
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
    // width: width - 100,
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  headerTitle: {
    fontFamily: 'bold',
    color: fifthColor,
    fontSize: 20,
  },
});
