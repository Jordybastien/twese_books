import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import {
  bgColor,
  white,
  fifthColor,
  firstColor,
  lightOrange,
  orange,
  lowGray,
} from '../../utils/colors';
import { AntDesign } from '@expo/vector-icons';

const CategoriesComponent = ({
  title,
  checkIfSelected,
  handleCategory,
  data,
}) => {
  return (
    <View style={styles.categoryContainer}>
      <View style={styles.categoryTitleContainer}>
        <Text style={styles.categoryTitle}>{title}</Text>
      </View>
      <View style={styles.categoryBody}>
        {data.map(({ id, label }, index) => (
          <TouchableOpacity
            style={[
              styles.bookCategoryContainer,
              checkIfSelected(id) && styles.selectedBookCategoryContainer,
            ]}
            onPress={() => handleCategory(id)}
            key={index}
          >
            <Text
              style={[
                styles.bookCategoryTitle,
                checkIfSelected(id) && styles.selectedBookCategoryTitle,
              ]}
            >
              {label}
            </Text>
            {checkIfSelected(id) ? (
              <AntDesign name="close" size={16} color={white} />
            ) : (
              <AntDesign name="plus" size={16} color={fifthColor} />
            )}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default CategoriesComponent;

const styles = StyleSheet.create({
  categoryContainer: {
    padding: 20,
    borderBottomColor: lowGray,
    borderBottomWidth: 1,
    paddingTop: 10,
    marginBottom: 20,
  },
  categoryTitleContainer: {
    marginBottom: 20,
  },
  categoryTitle: {
    fontFamily: 'bold',
    color: fifthColor,
    fontSize: 15,
  },
  categoryBody: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  bookCategoryContainer: {
    padding: 10,
    borderColor: fifthColor,
    borderWidth: 2,
    borderRadius: 20,
    marginRight: 10,
    flexDirection: 'row',
    marginBottom: 10,
  },
  selectedBookCategoryContainer: {
    backgroundColor: fifthColor,
  },
  bookCategoryTitle: {
    fontFamily: 'regular',
    color: fifthColor,
  },
  selectedBookCategoryTitle: { color: white },
});
