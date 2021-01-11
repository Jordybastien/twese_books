import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  TextInput,
} from 'react-native';
import {
  bgColor,
  white,
  fifthColor,
  firstColor,
  lightOrange,
  orange,
  lowGray,
  gray,
} from '../../utils/colors';
import { AntDesign } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const CategoriesComponent = ({
  title,
  checkIfSelected,
  handleCategory,
  data,
  onChangeText,
  value,
}) => {
  const [focused, setFocused] = useState(false);

  return (
    <View style={styles.categoryContainer}>
      <View style={styles.categoryTitleContainer}>
        <Text style={styles.categoryTitle}>{title}</Text>
      </View>
      <View
        style={[
          styles.categorySearchContainer,
          focused && styles.focusedTxtContainer,
        ]}
      >
        <AntDesign
          name="search1"
          size={18}
          color={focused ? fifthColor : gray}
        />
        <TextInput
          placeholder="Search"
          style={styles.txtBox}
          onBlur={() => setFocused(false)}
          onFocus={() => setFocused(true)}
          onChangeText={onChangeText}
          value={value}
        />
      </View>
      <View style={styles.categoryBody}>
        {data.slice(0, 8).map(({ id, label }, index) => (
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
  categorySearchContainer: {
    marginBottom: 15,
    borderBottomColor: lowGray,
    borderBottomWidth: 1,
    paddingBottom: 10,
    flexDirection: 'row',
  },
  txtBox: {
    width: width - 100,
    fontFamily: 'regular',
  },
  focusedTxtContainer: {
    borderBottomColor: fifthColor,
    borderBottomWidth: 2,
  },
});
