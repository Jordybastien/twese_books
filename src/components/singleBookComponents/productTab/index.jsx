import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { gray, fifthColor } from '../../../utils/colors';

const ProductTab = ({ bookInfo }) => {
  return (
    <View style={styles.productTab}>
      <View style={styles.product}>
        <Text style={styles.productLabel}>Book Type:</Text>
        <Text style={styles.productValue}>{bookInfo[0].book_type}</Text>
      </View>
      <View style={styles.product}>
        <Text style={styles.productLabel}>Publication date:</Text>
        <Text style={styles.productValue}>{bookInfo[0].book_publication_date}</Text>
      </View>
      <View style={styles.product}>
        <Text style={styles.productLabel}>Publisher:</Text>
        <Text style={styles.productValue}>{bookInfo[0].book_publisher}</Text>
      </View>
      <View style={styles.product}>
        <Text style={styles.productLabel}>Publication City:</Text>
        <Text style={styles.productValue}>{bookInfo[0].book_publication_city}</Text>
      </View>
      <View style={styles.product}>
        <Text style={styles.productLabel}>Publication Country:</Text>
        <Text style={styles.productValue}>{bookInfo[0].book_publication_country}</Text>
      </View>
      <View style={styles.product}>
        <Text style={styles.productLabel}>Language:</Text>
        <Text style={styles.productValue}>{bookInfo[0].book_language}</Text>
      </View>
    </View>
  );
};

export default ProductTab;

const styles = StyleSheet.create({
  productTab: {},
  product: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  productLabel: {
    fontFamily: 'bold',
    fontSize: 15,
    marginRight: 10,
    color: fifthColor,
  },
  productValue: {
    fontFamily: 'regular',
    fontSize: 15,
    color: gray,
  },
});
