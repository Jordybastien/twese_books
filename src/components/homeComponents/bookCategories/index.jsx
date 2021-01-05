import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import BookCard from './newBook';
import { lightOrange, white, fifthColor } from '../../../utils/colors';
import { ImageLink, selectColor, colorsPool } from '../../../utils/constants';
import { AntDesign } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const BooksCategories = ({ props }) => {
  const { bookCategories } = props;

  return (
    <ImageBackground
      source={require('../../../../assets/two-bg.jpg')}
      style={{ width }}
    >
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.viewAllContainer}
          onPress={() => props.navigation.navigate('AllCategoriesScreen')}
        >
          <AntDesign name="right" size={15} color={fifthColor} />
          <Text style={styles.viewAllTxt}>View All</Text>
        </TouchableOpacity>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ paddingLeft: 20, flexDirection: 'row' }}
        >
          {bookCategories.slice(0, 5).map((category, index) => (
            <BookCard
              title={category.genre_name}
              icon={`${ImageLink}${category.genre_icon}`}
              containerColor={colorsPool[index]}
              props={props}
              id={category.id}
              key={index}
              isHome={true}
            />
          ))}
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default BooksCategories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 20,
    // backgroundColor: white,
    paddingTop: 20,
  },
  viewAllContainer: {
    flex: 1,
    flexDirection: 'row-reverse',
    marginBottom: 10,
    alignItems: 'center',
  },
  viewAllTxt: {
    fontFamily: 'bold',
    color: fifthColor,
  },
});
