import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DescriptionTab = ({ bookInfo }) => {
  return (
    <View style={styles.descriptionTab}>
      <Text style={styles.descriptionText}>
        {bookInfo[0].full_book_description.replace(/(<([^>]+)>)/gi, "")}
      </Text>
    </View>
  );
};

export default DescriptionTab;

const styles = StyleSheet.create({
  descriptionTab: {},
  descriptionText: {
    fontFamily: 'regular',
  },
});
