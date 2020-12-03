import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { gray, fifthColor } from '../../../utils/colors';

const ProductTab = () => {
  return (
    <View style={styles.productTab}>
      <View style={styles.product}>
        <Text style={styles.productLabel}>Book Type:</Text>
        <Text style={styles.productValue}>Lorem ipsum</Text>
      </View>
      <View style={styles.product}>
        <Text style={styles.productLabel}>Publication date:</Text>
        <Text style={styles.productValue}>Lorem ipsum</Text>
      </View>
      <View style={styles.product}>
        <Text style={styles.productLabel}>Publisher:</Text>
        <Text style={styles.productValue}>Lorem ipsum</Text>
      </View>
      <View style={styles.product}>
        <Text style={styles.productLabel}>Publication City:</Text>
        <Text style={styles.productValue}>Lorem ipsum</Text>
      </View>
      <View style={styles.product}>
        <Text style={styles.productLabel}>Publication Country:</Text>
        <Text style={styles.productValue}>Lorem ipsum</Text>
      </View>
      <View style={styles.product}>
        <Text style={styles.productLabel}>Language:</Text>
        <Text style={styles.productValue}>Lorem ipsum</Text>
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
