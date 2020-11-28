import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BookCard from './singleBook';

const BooksCategories = () => {
  return (
    <View style={styles.container}>
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
    </View>
  );
};

export default BooksCategories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 5,
  },
});
