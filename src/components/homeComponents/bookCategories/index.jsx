import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Dimensions,
} from 'react-native';
import BookCard from './newBook';
import { lightOrange, white } from '../../../utils/colors';

const { width, height } = Dimensions.get('window');

const BooksCategories = () => {
  return (
    <ImageBackground
      source={require('../../../../assets/two-bg.jpg')}
      style={{ width }}
    >
      <View style={styles.container}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ paddingLeft: 20 }}
        >
          <BookCard title="Humor" icon="https://res.cloudinary.com/dodfpnbik/image/upload/v1606845478/humor_bosep3.png" />
          <BookCard title="Poetry" icon="https://res.cloudinary.com/dodfpnbik/image/upload/v1606845829/poetry_up3rpf.png"/>
          <BookCard title="Short Story" icon="https://res.cloudinary.com/dodfpnbik/image/upload/v1606845829/story_bedcmn.png"/>
          <BookCard title="Health" icon="https://res.cloudinary.com/dodfpnbik/image/upload/v1606845829/health_j4tv5s.png"/>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default BooksCategories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 20,
    // backgroundColor: white,
    paddingTop: 20,
  },
});
