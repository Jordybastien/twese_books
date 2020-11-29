import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import BookCard from './singleBook';

const BooksCategories = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ paddingLeft: 20 }}
      >
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
      </ScrollView>
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
